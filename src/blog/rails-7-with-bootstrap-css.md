---
title: "Rails 7 with Bootstrap CSS"
date: 2022-01-05
layout: post.njk
description: "Step-by-step guide to setting up Rails 7 with Bootstrap CSS and JS, and adding custom styles. Originally published on Medium."
---

<p align="center">
  <img src="/images/rails7-bootstrap-cover.png" alt="Rails 7 with Bootstrap CSS" class="img-fluid rounded shadow" style="max-width: 364px; margin: 24px 0;">
</p>

Recently the <a href="https://rubyonrails.org/2021/12/15/Rails-7-fulfilling-a-vision" target="_blank" rel="noopener">Rails 7</a> went out and it includes a lot of changes and new features. What I want to focus on is generating a new Rails 7 app with <a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" target="_blank" rel="noopener">Bootstrap CSS and Bootstrap JS</a>.

If you don’t want to read the article you can watch it <a href="https://youtu.be/tYr8yn7yRKw" target="_blank" rel="noopener">here</a>.

**Disclaimer:** The commands with a `:` prefix are run from inside Vim. To understand how I use Vim with Rails, check my <a href="https://medium.com/@grzegorz.smajdor/ruby-on-rails-and-vim-6bcf84e0bc08" target="_blank" rel="noopener">Ruby on Rails with Vim</a> article.

## Create new app with Bootstrap

Create a new Rails app using:

```
$ rails new app-with-bootstrap --css bootstrap
```

This will generate a new Rails app and download Bootstrap CSS and JS for you.

## Run app

In Rails 7, the new way of running the server is:

```
$ ./bin/dev
```

This spins up a few processes, including the server and a watcher for CSS and JS files.

## Prepare a URL path

The goal is to test Bootstrap CSS and JS on <a href="http://localhost:3000/home" target="_blank" rel="noopener">http://localhost:3000/home</a>. To do this, edit `routes.rb` and configure it:

```
:Einitializer
```

Add:

```
root 'home#index'
```

After reloading, you’ll get an exception because `home_controller` isn’t defined yet. Let’s fix that.

## Generate controller home

Generate the controller:

```
:Generate controller home
```

After refreshing, you’ll see an exception that the `index` action is missing. Add:

```ruby
def index
end
```

to `home_controller.rb`.

Now, after refreshing, you’ll be missing the `index.html.erb` template. Create it:

```
:Eview home/index.html.erb
```

Add some text to it. When you refresh, you should see your template rendered.

## Verifying Bootstrap CSS and JS

To verify Bootstrap is working, copy the modal HTML code from the <a href="https://getbootstrap.com/docs/5.0/components/modal/#live-demo" target="_blank" rel="noopener">Bootstrap page</a> and paste it into your `home/index.html.erb` file. Refresh the page and click the "Launch demo modal" button—you should see the modal.

## Add custom styles

To add custom styles, put your CSS in:

```
app/assets/stylesheets/custom.css
```

Then add the asset name to the Rails pipeline by editing `app/assets/config/manifest.js`:

```js
//= custom.css
```

Finally, apply the styles in your application layout by editing `application.html.erb` and adding:

```erb
<%= stylesheet_link_tag "custom", "data-turbo-track": "reload" %>
```

After refreshing, your modal should look different with your custom styles.

---

This small tutorial guided you step by step on how to have a fully fledged Rails 7 app with Bootstrap CSS, Bootstrap JS, and your own custom styles.

<a href="https://youtu.be/tYr8yn7yRKw" target="_blank" rel="noopener">Watch the video version here</a>.

Have fun,

Grzegorz
