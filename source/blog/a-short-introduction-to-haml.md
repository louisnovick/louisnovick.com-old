---
title: A short introduction to Haml
type: post
layout: article
date: 2015-07-19
description: "I talk about how to get started writing clear and maintainable HTML using Haml."
---

##What is [Haml](http://haml.info/)?

Simply defined, Haml is an abstract HTML preprocessor that allows you to write beautiful, DRY, well-indented and clear markup.  It provides you with an easily understood syntax that's easy to adjust to even if you have little to no prior experience with HTML preprocessors.  I think it's very possible to have a working knowledge of Haml within a relatively short amount of time.  It took about an hour for me to get used to it, but once I did I saw a noticeable increase in the speed at which I type out my HTML templates.

Getting up and running with Haml is easy enough.  Haml can be acquired through a Ruby gem and if you're using Ruby on Rails any file in your `app/views` folder can be switched over to Haml on the fly simply by changing its extension to `.haml`.  If you decide to go the `grunt` or `gulp` route to manage your asset pipeline, there are a few npm packages to choose from.

That being said, Haml is a joy to work with and I found it hard to go back to writing plain HTML after just one project.  Now, let's get started.

###The Basics

What's nice about the syntax is it allows you to write a lot of HTML in less time. At least for me, writing out HTML tags can feel tedious and boring so Haml definitely spices things up for me.  Here is an example of what I'm talking about...

```haml
.section
  .row
    %h1 This is an H1
    %p This is a paragraph
```

Will be processed into...

```html
<div class="section">
  <div class="row">
    <h1>This is an H1</h1>
    <p>This is a paragraph</p>
  </div>
</div>
```

`%` denotes a tag while `.` denotes a class name.  By typing `.` followed by a word you are automatically declaring a div with that class. Multiple classes & Ids can be added with ease, `.row.blue.large#woah` will become `<div class="row blue large" id="woah"></div>`.

Attributes in Haml are declared in a standard Ruby hash style.  To add attributes to your tags you start by creating a wrapper `{}` and then add `:` before the attribute name followed by `=>`.  Here's an example...

```haml
%input{:type => "submit", :value => "Send", :class => "btn btn--dark"}
```

Will be processed into...

```html
<input class="btn btn--dark" type="submit" value="Send"></input>
```

These are simple examples but I'm sure you can imagine how not having to type out each and every tag/attribute can save you valuable time when working on large HTML templates.

###Indentation

One thing to keep in mind when using Haml is how strict it is with indentation.  When writing Haml each level of indentation denotes a parent/child relationship and the way your tags will be nested...

```haml
.section
  .section-1
    .section-2
      .section-3
```

Will be processed into...

```html
<div class="section">
  <div class="section-1">
    <div class="section-2">
      <div class="section-3"></div>
    </div>
  </div>
</div>
```

Here's an example of Haml that would throw back an error...

```haml
.section
    .section-1
  .section-2
      .section-3
```

The indentation must be consistent or you will get errors.  It will be fairly obvious when this occurs as your entire browser page will turn into an error log.  The bright side is that this error log can sometimes help you debug the issue.  Haml also forbids you from mixing tabs and spaces which will cause errors, even if at first it isn't fully apparent why.  When this occurs I'll usually navigate to `View > Indentation` in my Sublime Text and make sure `Indent Using Spaces` is flipped on. It also helps to set your `"tab_size"` in your user preferences (I keep mine at 2).  No matter which text editor is your cup of tea, there should be options that allow you to alter these settings and keep them consistent across all of your project files.  I strongly recommend doing this regardless of whether you decide to work with Haml or not.

Having said that, I don't think strict indentation is a problem! I believe it's actually a feature in its own way.  By enforcing this, Haml helps preserve a certain degree of predictability and consistency allowing you to quickly scan through pages and templates with little to no confusion whatsoever.  This is worth the occasional mishap in my book.

###Other Features

There are countless other features I didn't cover that make Haml invaluable in certain situations.  To name a few...

* Filters
* Ruby Evaluation
* Helper Methods

For a complete list of Haml's features check out the [documentation](http://haml.info/docs/yardoc/file.REFERENCE.html).

_Thanks for reading and catch you next time!_

