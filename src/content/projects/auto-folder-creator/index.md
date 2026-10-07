---
title: "Auto Folder Creator"
description: "A desktop app that builds a consistent project folder structure, job number and brief in one keystroke"
date: "Oct 7 2026"
repoURL: "https://github.com/tomlowndes/Auto-folder-creation"
---

Auto Folder Creator is the desktop successor to my [Caps Lock + D Python script](/blog/03-auto-folder-creation/). Pick a project type, type a name, hit Enter, and it builds the whole structure: subfolders, a `<name>_brief.docx`, and any template files renamed to the project.

![Auto Folder Creator main window](/afc-final-create.png)

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
