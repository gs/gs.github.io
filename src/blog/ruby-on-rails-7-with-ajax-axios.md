---
title: "Ruby on Rails 7 with Ajax (axios)"
date: 2022-10-29
description: "Rails 7, AJAX with axios and stimulus. Fixing FormData issues."
layout: post.njk
---

Ruby on Rails is a fantastic framework. It’s easy to build your startup with, MVP product, and just enjoy ruby. However, it changes often, and it’s challenging to keep up with best practices.

Currently, we have [turbo](https://github.com/hotwired/turbo-rails) built in, but I’m not fully up to date (yet!).

Recently, I needed to make a simple AJAX request to check if a user exists. Turbo probably solves this, but I used the old approach — an HTML modal + [stimulus controller](https://github.com/hotwired/stimulus-rails) + [axios](https://axios-http.com/docs/intro):

### HTML modal
```html
<div data-controller="check-user-email">
  <input type="email" data-check-user-email-target="email" name="email" placeholder="Email" />
  <div>
    <button data-check-user-email-target="submit" name="submit">Continue</button>
  </div>
</div>
```

### Stimulus controller (check_user_email_controller.js)
```js
import { Controller } from "@hotwired/stimulus"
import axios from 'axios'

export default class extends Controller {
  static targets = ['email', 'submit']
  connect() {
    this.submitTarget.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.emailTarget.value.length === 0) {
        alert('Please provide an email.')
      } else {
        axios.get('api/users_by_emails', {
          params: {
            email: this.emailTarget.value
          }, headers: {'ACCEPT': 'application/json'}
        }).then(function (response) {
          // handle success
        }).catch(function (error) {
          // handle error
        });
      }
    });
  }
}
```

I used `axios` for the AJAX GET request.

To import axios (with importmaps):
```sh
./bin/importmap pin axios
```

And that’s it — or so I thought!

### Issue
After installing the newest version (`axios@1.1.3`), AJAX stopped working and the console said:

![](https://miro.medium.com/v2/resize:fit:700/1*AEuzXh_Oy-p9gFByfQPf3w.png)

```
Failed to register controller: check-user-email (controllers/check_user_email_controller) TypeError: Cannot read properties of undefined (reading 'FormData')
    at index.js:162:32
```

Not sure why, but even StackOverflow couldn’t help.

### Fix
You have to pin axios to version **0.27.2**:

```sh
./bin/importmap pin axios@0.27.2
```

Versions after 0.27.2 have the `FormData` issue.

Not sure why newer versions break, or why Turbo could make this simpler (teach me in comments!).

Happy coding!

— Grzegorz
