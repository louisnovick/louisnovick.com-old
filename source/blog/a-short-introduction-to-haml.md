---
title: A short introduction to Haml
type: post
layout: article
date: 2015-07-19
description: "I talk about how to get started writing clear, maintainable HTML using Haml."
---

##What is [Haml](http://haml.info/)?

Simply defined, Haml is an abstract HTML preprocessor that allows you to write beautiful, DRY, well-indented and clear markup.  It provides you with an easily understood syntax that's easy to adjust to even if you have little to no prior experience with other HTML preprocessors.  Depending on what you're using it for I think it's very possible to have a working knowledge of it within an hour of time.

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

`%` denotes a tag while `.` denotes a class name.  By typing `.` followed by a word you are automatically declaring a div with that class. Multiple classes/Ids can be added with ease, `.row.blue.large#woah` will become `<div class="row blue large" id="woah"></div>`


This is a very simple example but I'm sure you can imagine how not having to type out each and every tag can save you valuable time when working on large HTML templates.  There are many other features besides the syntax that make Haml invaluable in certain situations.  The ability to use filters such as `:plain`, to pass text through to generated HTML can be really useful when you're unsure how to type something out using the Haml syntax.  You can even use something like `:markdown` to let Haml know that whatever comes after it should be parsed using Markdown.  Obviously, there are dependencies required for a lot of these things to work in the first place but it's nice that they are available at all.

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

This isn't a problem though! I believe it's actually a feature in its own way.  By enforcing correct indentation Haml helps preserve a certain degree of predictability and consistency throughout your HTML allowing for quickly scanning pages with little confusion as to what div is nested in what.  This is worth the occasional error in my book.



