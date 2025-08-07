---
title: "HotReload with Ruby On Rails 7"
date: 2022-10-17
description: "How to enable hot-reload in Ruby on Rails 7 using hotwire-livereload and Redis."
layout: post.njk
---

At [deliverists.io](http://www.deliverists.io) we build custom software and deliver quality products to our clients. Some time ago, we worked on a project with ClojureScript.

There are many benefits to this language, but today I want to focus on the feature called `hot-reload`. The idea is super simple, yet powerful: the web page is reloaded on file save. This small but useful feature saved me a few keystrokes and allowed me to stay focused in the editor while seeing immediate changes in the browser.

As you can see above, without moving out from my editor, the page reloads and I can see the changes immediately! Now… let's replicate that behavior in Ruby on Rails 7.

---

### Let's quickly build a new Ruby on Rails app

```sh
gem install rails
rails new test-app --css tailwind
cd test-app
./bin/dev
```

---

### Then we need to do a few configuration changes:

1. **Edit `Gemfile` and add [`hotwire-livereload`](https://github.com/kirillplatonov/hotwire-livereload) gem:**

    ```ruby
    group :development do
      gem "hotwire-livereload"
    end
    ```

2. **Install with bundler**

    ```sh
    bundle install
    ```

3. **Run installation**

    ```sh
    rails livereload:install
    ```

4. **Install Redis (macOS with Homebrew)**

    ```sh
    brew install redis
    ```

5. **Run Redis**

    ```sh
    brew services restart redis
    ```

6. **Run Rails**

    ```sh
    ./bin/dev
    ```

Edit the file and see the changes!

No more switching windows, hitting F5! That's a live and time saver.

---

Have fun and keep coding,

[Grzegorz](http://www.grzegorz-smajdor.com), founder of [deliverists.io](http://www.deliverists.io)
