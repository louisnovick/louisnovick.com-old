---
title: 3, 2, 1 Launch
type: post
layout: article
date: 2015-02-18
description: "My goal for this blog is to reflect on what I learn and to impart knowledge on anybody who will listen.  While I am not an expert in my field now I am 100% certain that I have the potential to be one someday."
---

##Launch

My goal for this blog is to reflect on what I learn and to impart knowledge on anybody who will listen.  While I am not an expert in my field now I am 100% certain that I have the potential to be one someday.  

I am always eager to learn new things and find more efficient ways of accomplishing my goals.  By sharing what I learn while growing as a developer I hope to become a bigger part of the amazing community of developers that already exists and continues to inspire my work each and every day.

###The Process

To build my website I utilized [Middleman](https://middlemanapp.com/) and [Bourbon](http://bourbon.io/) in conjunction with other modern web technologies.  It's 100% okay if you don't know what these are right now, neither did I a month ago.  [Bourbon](http://bourbon.io/) is a sass framework and [Middleman](https://middlemanapp.com/) is a static site generator that leverages the Ruby language. Prior to developing this site I had never really worked with a Static Site Generator such as the well known 'Jekyll'.  It's difficult to really define what a static site generator is but if I had to sum it up in one sentence, "A Template directory containing various file formats that once compiled form a functional website".  It goes without saying that developing this site really exposed me to some tools and elements I feel I have really been missing out on.  Some of these include:

* [Haml](http://http://haml.info/)
* SCSS Partials and inline Media Queries
* SVG 


###[Haml](http://http://haml.info/) and Static Site Templating

Prior to developing this site I had never used [Haml](http://http://haml.info/).  I had previously dabbled in ERB, another form of HTML templating, a few months ago when I was getting my hands dirty with Ruby on Rails but had never really explored it in earnest.  I can honestly say that learning [Haml](http://http://haml.info/) has ruined me for writing Vanilla HTML forever.  Writing plain HTML feels tedious and unnecessary once you've messed around with something as powerful as [Haml](http://http://haml.info/).  It reminds me of when I first started using Emmet, a plugin for Sublime text and other text editors that essentially allows you to utilize various shortcuts in order to speed up your HTML writing. If you were to type `.row` in a [Haml](http://http://haml.info/) file it would later be compiled into ```<div class="row"></div>``` in HTML. This saves you a ton of time when dealing with long templates.  Combine this with some HTML minification and everytime you hit save feels like you're working with a well oiled machine.  Obviously, this doesn't even scratch the surface of what you can do with [Haml](http://http://haml.info/).

###SCSS Partials and Inline Media Queries

I had used SCSS prior to developing this site but I suppose some of its' better features never really crossed my mind until now.  For one thing, when I first started developing websites I fell into the trap of extremely bloated and hard to maintain CSS.  I think that this is to be expected of someone just getting their feet wet but I do wish I had started using SCSS in all of it's glory earlier on in my career.  For one thing, I found the ability to partial out your styles into little manageable slices invaluable and neccessary.  No more ctrl F'ing through a file to find that one pesky selecter I want removed.  I simply go to the partial responsible and deal with the issue, quickly and without hassel.  Using inline media queries also aided me during development because I didn't have to keep track of where I put all of my blasted media queries.  By leveraging the [Bourbon](http://bourbon.io/) Sass Framework I was able to use something like `@include media(min-width 769px)` right on the selector in question to achieve whatever it I was hoping to achieve.  SCSS is wonderful tool and I hope to become more proficent with it as I continue to use it my work.

###SVG

SVG is an interesting facet of the modern web that I found myself eager to explore.  Using SVG effectively allows designers to manipulate shapes and images in ways previously not possible.  I have seen time and time again others use SVG to achieve beautiful animations, or simply incorporate them into their designs to take advantage of their inherent scalability on every screen size. I was inspired and decided to incorporate SVG on my own site which now look great on every display I have tested them on.  I see no reason not to take advantage of SVG in my future designs.

###Final Remarks

If you havn't investigated [Middleman](https://middlemanapp.com/) yet you should.  Similar to Jekyll, [Middleman](https://middlemanapp.com/) is a static site generator that leverages Ruby to create an excellent development environment for you to work in.  It also makes it really easy to deploy/manage the site later down the road.  I currently work on this site locally, as you should, and when I am ready to push it out to github pages I simply type in `Middleman deploy` in my terminal and off it goes.  It truly is a great way to develop websites of this nature that feels fresh and really gives you wings throughout the entire process.  As designers and developers we must strive to always find faster and more efficient ways of doing things.  [Middleman](https://middlemanapp.com/) really improved my process and I know this wont be the last time I use it.  


------------------
