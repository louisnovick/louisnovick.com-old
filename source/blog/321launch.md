---
title: 3, 2, 1 Launch
type: post
layout: article
date: 2015-02-18
description: "My goal for this blog is to reflect on what I learn and to impart knowledge on anybody who will listen.  I'm not an expert in my field now but I am certain that I have the potential to be one someday."
---

##Launch

My goal for this blog is simple, to reflect on what I learn and to impart knowledge on anybody who will listen.  I'm no where near an expert in the field of web development but I am becoming more and more certain with each passing day that I have the potential to be one eventually.

I am always eager to learn new things and find more efficient ways of accomplishing my goals.  By sharing what I learn while growing as a developer I hope to become a bigger part of the amazing community of developers that already exists and continues to inspire my work each and every day.

###The Process

When I first designed and developed this site of mine, I utilized [Middleman](https://middlemanapp.com/) and [Bourbon](http://bourbon.io/).  Bourbon is a sass framework and Middleman is a static site generator that leverages the Ruby language. Prior to developing this site I had never really worked with a Static Site Generator.  If I had to sum it up in one sentence it would be, a recommended file structure and useful set of tools that make compiling a static site easy and efficient.  It goes without saying that developing this site really exposed me to some things I didn't know I needed until I had them.  Included are...

* [Haml](http://haml.info/)
* SCSS and SASS
* SVG

###[Haml](http://haml.info/) and Static Site Templating

Haml is an abstract HTML preprocessor which allows one to write beautiful, DRY, well-indented, clear markup. It gives you the tools to write a lot of HTML in a short amount of time while still maintaining the expressiveness of basic html. I had previously used ERB and Handlebars which are other forms of HTML templating but I can honestly say that learning [Haml](http://http://haml.info/) has ruined me for writing HTML in any other way (Except maybe Jade since it is pretty similar).  Writing plain HTML now feels tedious and unnecessary.  Haml also allows you to split your files into partials to be organized and reused in other HTML templates.  Combine this with some HTML minification and everytime you hit save I swear it feels like you're writing poetry, everything just flows.  The page you're looking at right now is rendered by my `article.haml` file.  See below...

```haml
!!! 5
%html{ lang: 'en' }
  = partial 'shared/head'

  %body{:class => page_classes}
    = partial 'shared/header'

    %main{ role: 'main' }

      %section.row.bch
        .cell
          .well.well--l
            %h1= current_page.data.title
            %time.label.label--inverted= pretty_date( current_page.data.date )

      %section.row
        .cell
          .well.well--l
            = preserve do

              = yield

            = link_to "Back", '#', class: "btn btn--light mts", :onclick => 'history.back(); return false;'

    = partial 'shared/footer'

    = partial 'shared/footer-scripts'
```

The actual content of the post you are reading is added to the template by `= yield`



###SCSS Partials and Inline Media Queries

I had used SCSS prior to developing this site but I suppose some of its' better features never really crossed my mind until now.  For one thing, when I first started developing websites I fell into the trap of extremely bloated and hard to maintain CSS.  I think that this is to be expected of someone just getting their feet wet but I do wish I had started using SCSS in all of it's glory earlier on in my career.  For one thing, I found the ability to partial out your styles into little manageable slices invaluable and neccessary.  No more ctrl F'ing through a file to find that one pesky selecter I want removed.  I simply go to the partial responsible and deal with the issue, quickly and without hassel.  Using inline media queries also aided me during development because I didn't have to keep track of where I put all of my blasted media queries.  By leveraging the [Bourbon](http://bourbon.io/) Sass Framework I was able to use something like `@include media(min-width 769px)` right on the selector in question to achieve whatever it I was hoping to achieve.  SCSS is wonderful tool and I hope to become more proficent with it as I continue to use it my work.

###SVG

SVG is an interesting facet of the modern web that I found myself eager to explore.  Using SVG effectively allows designers to manipulate shapes and images in ways previously not possible.  I have seen time and time again others use SVG to achieve beautiful animations, or simply incorporate them into their designs to take advantage of their inherent scalability on every screen size. I was inspired and decided to incorporate SVG on my own site which now look great on every display I have tested them on.  I see no reason not to take advantage of SVG in my future designs.

###Final Remarks

If you havn't investigated [Middleman](https://middlemanapp.com/) yet you should.  Similar to Jekyll, [Middleman](https://middlemanapp.com/) is a static site generator that leverages Ruby to create an excellent development environment for you to work in.  It also makes it really easy to deploy/manage the site later down the road.  I currently work on this site locally, as you should, and when I am ready to push it out to github pages I simply type in `Middleman deploy` in my terminal and off it goes.  It truly is a great way to develop websites of this nature that feels fresh and really gives you wings throughout the entire process.  As designers and developers we must strive to always find faster and more efficient ways of doing things.  [Middleman](https://middlemanapp.com/) really improved my process and I know this wont be the last time I use it.

