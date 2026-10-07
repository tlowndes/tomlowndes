---
title: "Auto Folder Creator"
description: "A desktop app that builds a consistent project folder structure, job number and brief in one keystroke"
date: "Oct 7 2026"
repoURL: "https://github.com/tlowndes/Auto-folder-creation/tree/desktop-app"
---

## Starting a project shouldn't feel like admin

Every new job begins the same way. Make a folder. Make the same subfolders inside it. Name everything the same way you did last time, and try to remember what you called it. Then, somewhere in the middle of it, start doing the actual work. It's dull, it's repetitive and it's exactly the kind of thing a computer should be doing for you.

I'd already automated it once, with a [Python script triggered by Caps Lock + D](/blog/03-auto-folder-creation/). It worked, but it lived in a terminal window, and I had to run it every time. So I rebuilt it as a proper desktop app.

![Auto Folder Creator main window](/afc-final-create.png)

## One keystroke, one structure

Pick a project type, type a name, hit Enter. The folders, a Word brief and any template files appear, named properly, with a job number on the front. Before anything is created, a live preview shows exactly what's about to be made, so there are no surprises on disk.

**Design:** a clean, keyboard-first window with big type buttons and the folder tree previewed beside them.

**Coding:** built with Electron and Node.js.

## The rules it plays by

- **Job numbers** like `J-0043 Spring Campaign`, from one shared counter. Each project type can switch numbering off.
- **Your files stay where they are.** The "Organise existing" tool numbers old project folders (oldest first), fills in missing subfolders and adds a brief. It never moves what's already inside, and there's an undo button for the nervous.
- **Templates get renamed** to match the project, so a template file becomes `J-0043 Spring Campaign.indd` without you touching it.
- **Nested subfolders:** `Export/Web` creates `Web` inside `Export`.
- **Keyboard first:** `Ctrl+1` to `Ctrl+4` picks a type, `Enter` creates, `Esc` goes back. A recent projects list and a duplicate warning keep you honest.

![Organise existing folders](/afc-final-organise.png)

## From terminal to app

Concept sketches showing how the idea grew from a terminal prompt into a windowed app.

![Sketch of the original terminal script](/afc-sketch-1-terminal.svg)

![Wireframe of the first app layout](/afc-sketch-2-wireframe.svg)

![Layout options: tabs, cards or sidebar](/afc-sketch-3-options.svg)

It's a small tool, but it's the sort of small tool that quietly saves a few minutes, dozens of times a month, forever.

**Built with:** Electron, Node.js, HTML/CSS.
