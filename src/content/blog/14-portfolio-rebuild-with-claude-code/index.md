---
title: "I'm a Designer, Not a Developer: Rebuilding My Portfolio With Claude Code"
metaTitle: "Rebuilding My Portfolio With Claude Code"
description: "How I used Claude Code to audit, redesign and fix my own portfolio site, what I decided, where I pushed back and what other designers can take from it."
date: 2026-10-18
tags: [tech, workflow, design, ai]
draft: false
---

Earlier this month I started job hunting properly, and that meant looking at my portfolio the way a hiring manager would. It looked fine. It also had a quiet problem: when I pasted a link into Slack or LinkedIn, nothing showed up. No image, no title worth reading. Hardly ideal when the whole point of the site is to get me hired.

I'm a designer, not a developer. I can read a bit of code and I'm happy in Figma, but fixing a site's metadata, share cards and routing used to mean a weekend of squinting at forums. This time I tried something different: I acted as art director, and let Claude Code do the typing.

## Starting with an audit, not a redesign

The first job wasn't making anything pretty. It was finding out what was actually wrong. I asked for a full audit of the site and got a ranked list back.

The big ones were embarrassing in a good way:

* Every absolute link still pointed at the theme's demo site, so search engines were being sent to someone else's domain.
* The default share image didn't exist, which is why my links looked blank.
* Project cards weren't real links, so you couldn't open one in a new tab or reach it with a keyboard.

None of that is visible when you look at the page. That's the point. A designer's eye catches spacing and type; it doesn't catch a canonical tag.

## Two designs in one site

The audit also showed something I'd half-known. The site had two visual languages. The home page was still the stock theme, while the blog, projects and Uses pages had drifted into a newer style I'd been calling "field notes": mono labels, small `//` separators, calm cards.

So the redesign brief was simple. Pick one, and make it the whole site. I chose field notes, rolled it out page by page, and put availability for roles right on the home page, because a portfolio should say what it's for.

## Where I made the calls

This is the bit I'd want other designers to hear. It was quicker than I expected, but I had to keep steering. It wasn't always right for me, and the corrections were mine to make.

* **Preview before it ships.** Every redesign got checked on my own machine first. Nothing went live because it looked good in a description.
* **No testimonials.** It's a standard suggestion and I said no. It's my site, my call.
* **Keep both email addresses.** The site shows one and the contact form delivers to another. It looks untidy on paper. I wanted it that way.
* **Facts over polish.** When a line on my CV overstated something, it came out. A good sentence that isn't true is worse than a plain one that is.

I also had to repeat myself more than I'd like. Tools forget what you told them last week, so I ended up writing my preferences down in a project note that every new session reads. It's the same job as a brand guideline, just for a different audience.

## What got built

In small pull requests that I reviewed one at a time:

* quick fixes to the domain, share images and links
* the home page redesign, then the "field notes" look across the rest of the site
* proper 1200 × 630 share cards for every page
* a CV page with a downloadable PDF, a contact form and privacy-friendly analytics
* an SEO pass: a custom 404, trailing-slash fixes and longer descriptions

I also moved hosting to Cloudflare Pages and retired the old setup. Nothing dramatic, just fewer moving parts.

## What I'd tell another designer

1. **Ask for an audit first.** It's the cheapest way to find the problems you can't see.
2. **Work in small steps.** One pull request per idea is easy to review and easy to undo.
3. **Keep the taste yourself.** The AI will give you options all day. Choosing between them is the job you're being hired for.
4. **Write your rules down.** Preferences, corrections, things to never suggest. Future you, and the tool, will thank you.

## What's still on the list

There's always a list. The portfolio PDF is too heavy, a few images are still hotlinked, and one page has stray reference markers I need to clear out. That feels about right for a site that's alive rather than finished.

If you're a designer who's been putting off your own site because the technical side felt like a wall, this is a decent way over it. You don't need to become a developer. You need to know what good looks like, and be willing to say no.
