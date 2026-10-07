---
title: "Auto Folder Creator"
description: "A desktop app that builds a consistent project folder structure, job number and brief in one keystroke"
date: "Oct 7 2026"
---

## Building a faster way to start projects

Every new project used to start the same way: making the same folders, naming them the same way and creating a brief by hand. I'd already automated it once with a [Python script triggered by Caps Lock + D](/blog/03-auto-folder-creation/), so I decided to turn it into a proper desktop app.

Pick a project type, type a name and hit Enter, and it builds the whole structure for you.

![Auto Folder Creator main window](/afc-final-create.png)

**Design:** a clean, keyboard-first window with a live preview of the folder tree before anything is created.

**Coding:** built with Electron and Node.js, with job numbers (`J-0043 Spring Campaign`), per-type templates and a one-click undo.

**Why it matters:** consistent filing across every design, video and idea project, with no setup time.

## Features

- **Job numbers** like `J-0043 Spring Campaign`, from one shared counter, switchable per project type
- **Live preview** of the folder tree before anything is created
- **Organise existing**: numbers old project folders oldest-first, fills in missing subfolders, with one-click undo
- **Templates** per type, nested subfolders (`Export/Web`) and a recent projects list
- Keyboard first: `Ctrl+1-4` picks a type, `Enter` creates, `Esc` goes back

![Organise existing folders](/afc-final-organise.png)

## Early designs

Concept sketches showing how the idea moved from a terminal prompt to a windowed app.

![Sketch of the original terminal script](/afc-sketch-1-terminal.svg)

![Wireframe of the first app layout](/afc-sketch-2-wireframe.svg)

![Layout options: tabs, cards or sidebar](/afc-sketch-3-options.svg)

**Built with:** Electron, Node.js, HTML/CSS.
