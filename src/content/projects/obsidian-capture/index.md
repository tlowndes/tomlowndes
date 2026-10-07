---
title: "Capture for Android"
description: "A tiny Android app that drops tasks and links straight into my Obsidian vault"
date: "Oct 7 2026"
---

## Straight into your vault

Capture is a small Android app I built so a thought on my phone lands in Obsidian in a couple of taps, without opening Obsidian, finding the right note and scrolling to the right heading.

![Capture app mockup](/capture-mockup.png)

It does two jobs and nothing else:

- **Task:** adds a line to the `## Active` list in my Quick Task note, with a due date (Today, Tomorrow or a picked date).
- **Read later:** saves a link into my Read It Later inbox in the vault.

**Share sheet:** the app also appears in Android's Share menu. Sharing a link from Chrome, YouTube or Reddit saves it in one tap with no screen at all.

**No lock-in:** it writes plain Markdown directly into the synced vault. No server and no account.

## Features

- Dark, one-handed layout with a Task / Read later toggle
- A "Just added" list with tick-off, delete and undo
- Choose your vault folder once; it's remembered after that

**Built with:** Kotlin and Android Studio.

I wrote more about how this and my [Auto Folder Creator](/projects/auto-folder-creator) came together in the blog post *Tiny Tools, Less Friction* (coming soon).
