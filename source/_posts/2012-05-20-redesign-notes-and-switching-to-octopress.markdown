---
layout: post
title: "Redesign notes and <em>switching to Octopress</em>"
date: 2012-05-20 15:54
comments: true
categories:
style:
published:
---
When I set out to redesign this site and start blogging, I knew I wanted it to be a static <abbr title="HyperText Markup Language">HTML</abbr> generated weblog (also commonly known as "baked"). Coming from [Wordpress](http://wordpress.org/), *this publishing workflow is a dream*.

Content, which is just static <abbr title="HyperText Markup Language">HTML</abbr>, is created in Markdown in a text editor, saved into version control (Git) and pushed to GitHub to deploy. This means no database (MySQL) — a potential security nightmare and single point of failure, no page caching (goodbye WP Super Cache and W3 Total Cache), no <abbr title="File Transfer Protocol">FTP</abbr> and *super fast page loads* &mdash; all good things.

I evaluated some great systems including [Octopress](http://octopress.org/), [Middleman](http://middlemanapp.com/), [Nesta CMS](http://nestacms.com/) and I'm keeping a close eye on [Calypso](http://calip.so/) (built on Node.js and MongoDB), but in the end I opted for Octopress as it fitted my needs. I'm still ironing out a few kinks with Octopress, but overall I'm very pleased with how its worked out.

Here are some notes on the thought process behind this redesign:

- <em>Powered by Octopress</em> &mdash; with static <abbr title="HyperText Markup Language">HTML</abbr> offering many advantages over the traditional database and caching (especially if you get [fireballed](http://daringfireball.net/linked/2010/08/09/fireballed)).
- *Hosted on GitHub* &mdash; not only are their servers *very* quick it's also free. Anyone can [make a pull request on GitHub to contribute to this website](https://github.com/jameslutley/jameslutley.github.com/), suggest changes or amendments.
- *Speed* &mdash; the goal was to have this site load in one second. To make this possible, speed led all of the decisions and compromises that were made with this site.
- *Page-weight* &mdash; the aim was to keep pages below 100k for a great mobile experience. This meant that anything that didn't need to be there went and everything that was left was *heavily compressed*.
- *HTTP requests* &mdash; another point critical to speed. For this reason, the basic theme for this site has no images, apart from the picture of me in the footer, but that's been encoded in base64 and embedded into the main stylesheet.
- *JavaScript* &mdash; minimal JavaScript, just Disqus and Google Analytics (both loaded asynchronously) plus Typekit. No jQuery.
- *Mobile-first, responsive web design* &mdash; my previous design wasn't responsive and that bothered me. I've been building almost exclusively responsive websites since the latter part of 2010 and this was not reflected in my personal website &mdash; so this was a priority.
- *Design* &mdash; I'm a big fan of [Instapaper](http://www.instapaper.com/), [Readability](http://www.readability.com/) and [Reeder app](http://reederapp.com/), and I wanted this great reading experience to be the default for my site.
- *Typography* &mdash; page-weight was also the final deciding factor for the typography. I trialled dozens of serif faces before narrowing it down to three. Of these, the beautiful [Freight Text Pro](https://typekit.com/fonts/freight-text-pro) was noticeably leaner. This became even more apparent when I added 'All Characters' in Typekit, should I wish to add ligatures in the future. I even made the decision to forgo a bold weight, instead using colour to give the appearance of increased emphasis.

There's still some issues I'd like to address with the redesign, and as this is my personal site, I like to use it as my playground for trying out new techniques and ideas. So, it's likely to remain in a state of flux for the foreseeable future.