---
title: 3, 2, 1 Launch
type: post
layout: article
date: 2015-02-18
description: "Let this serve as an introduction.  My goal for this blog is to reflect on what I learn and to impart knowledge on anybody who will listen.  I am by no means an expert but I know for certain that I have the potential to be one someday."
---

##Launch

Let this serve as an introduction.  My goal for this blog is to reflect on what I learn and to impart knowledge on anybody who will listen.  I am by no means an expert but I know for certain that I have the potential to be one someday.  To build this site I utilized Middleman and Bourbon in conjunction with other modern web technologies.  Developing this site really exposed me to some things I feel I have really been missing out on.  Some of these include:

* Haml and static site templating
* SCSS Partials and inline Media Queries
* SVG


###Haml and Static Site Templating

Prior to developing this site I had never used HAML.  I had dabbled in ERB a few months ago when I was getting my hands dirty with Ruby on Rails but had never really explored it in earnest.  Honestly, the only other real HTML templating I had really been exposed to was Jade but my knowledge of it was limited.  I wont say that any one of them is the "best" because I truly believe that it depends entirely on your own preference.  Due to my lack of prior experience in HTML templating I had a clean slate if you will.  Lets just say that learning Haml has ruined me for Vanilla HTML forever.  The simple fact that this
`.row` in Haml is equal to this ```<div class="row"></div>``` saves you a ton of time when dealing with long templates.  Obviously, this doesn't even scratch the surface of what you can do with [Haml](http://http://haml.info/).

###SCSS Partials and Inline Media Queries

I had used SCSS prior to developing this site but I suppose some of its' better features never really crossed my mind until now.  For one thing, when I first started developing websites I fell into the trap of extremely bloated and hard to maintain CSS.  I think that this is to be expected of someone just getting their feet wet but I do wish I had started using SCSS in all of it's glory earlier on in my career.  For one thing, the ability to partial out your styles into little manageable slices is invaluable to me.  No more ctrl F'ing through a file to find that one pesky selecter I want removed.  I simply go to the partial responsible and deal with the issue, efficiently.  Using inline media queries also aided me during development because I didn't have to keep track of where I put all of my blasted media queries.  By leveraging the [Bourban](http://bourbon.io/) Sass Framework I was able to use something like `@include media(min-width 769px)` right on the selector in question to achieve whatever it I was hoping to achieve.  SCSS is wonderful tool and I hope to become more proficent with it as I continue to use it my work.

###SVG

SVG is an interesting facet of the modern web that I was eager to explore.  I tried incorporating some SVG logos onto my site in an effort to keep them looking good at any size.  I also experimented with some SVG animation but it didn't really work out for me.  The SVGs did animate but I simply couldn't justify having them move around for no apparent reason.  From a UX standpoint, I found them distracting and from a development standpoint they simply weren't efficient so I did away with the animation.  I did however keep the SVGs around which do look great, especially on my retina display.

###Final Remarks

If you havn't developed a website for yourself yet or are currently striving to redesign your current site as I did you should consider diving into [Middleman](https://middlemanapp.com/).  Similar to Jekyll, Middleman is a static site generator that leverages Ruby to create an excellent development environment for you to work in, as well as make it easy to deploy/manage the site later down the road.  I currently work on this site locally and when I am ready to push it out to github pages, I simply type in `middleman deploy` and off it goes.  It truly is a great way to develop websites that feels fresh and efficient.  If you have any questions for me please don't hesitate to get in contact with me and once again, welcome to my site.

------------------
