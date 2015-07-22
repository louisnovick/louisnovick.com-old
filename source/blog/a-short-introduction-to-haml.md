---
title: A short introduction to Haml
type: post
layout: article
date: 2015-07-19
description: "I talk about how to get started writing clear, maintainable HTML using Haml."
---

##What is [Haml](http://haml.info/)?

Simply defined, Haml is an abstract HTML preprocessor that allows you to write beautiful, DRY, well-indented and clear markup.  It provides you with an easily understood syntax that's easy to adjust to even if you have little to no prior experience with HTML preprocessors.  I think it's very possible to have a working knowledge of Haml within a relatively short amount of time.  It took about an hour for me to get used to it, but once I did I saw a noticable increase in the speed at which I type out my HTML templates.

Getting up and running with Haml is easy enough.  If you're using Ruby on Rails any file in your `app/views` folder can be switched over to Haml on the fly simply by changing its extension to `.haml`.  If you decide to go the `grunt` or `gulp` route to manage your asset pipeline, there are npm packages available for you to take advantage of.

Haml is a joy to work with and I find it hard to go back to writing plain HTML after only one project, this website.  That being said, let's get started.

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

The indentation must be consistent or you will get an error every time.  Haml forbids you from mixing tabs and spaces which can sometimes cause errors even if it's not really apparent why.  When this occurs I will usually navigate to `View > Indentation` in Sublime Text and turn on `Indent Using Spaces`.  It also helps to set your `"tab_size": 2` in your sublime user preferences.

Despite the occasional annoyance I don't think this is a problem! I believe it's actually a feature in its own way.  By enforcing correct indentation Haml helps preserve a certain degree of predictability and consistency throughout your HTML allowing for quickly scanning pages with little confusion as to what is nested in what.  This is worth the occasional error in my book.

###Other Features

There are many other features I didn't cover that make Haml invaluable in certain situations.  To name a few...

* Filters
* Ruby Evaluation
* Helper Methods

For a complete list of Haml's features check out the [documentation](http://haml.info/docs/yardoc/file.REFERENCE.html).

_Thanks for reading and catch you next time!_

