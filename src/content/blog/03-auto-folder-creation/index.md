---
title: "Supercharge Your Creative Workflow"
description: "If you're anything like me, you know that keeping your projects organized is crucial to maintaining your sanity and productivity."
date: "06/10/2024"
---

If you're anything like me, you know that keeping your projects organized is crucial to maintaining your sanity and productivity. But let's face it—manually creating folders for every new project can be a real drag. My new solution that will hopefully streamline my workflow and ensure a uniform filing structure: a simple yet powerful Python script.

## The Magic of Automation

When starting a new design, video, or idea project. Instead of wasting time setting up the necessary folders, with a simple keyboard shortcut Caps lock + d. To see how and why I got rid of my caps lock key and changed it into a Hyper Key, see [The Death of Caps Lock, Embracing the Hyper Key](/blog/02-death-of-caps-lock/)

A terminal window will launch and walk you through the folder creation script.

## How the Script Works

When you run the script, it prompts you to select the type of project you're working on. Here's a quick rundown of the options:

![Auto Folder launched on terminal](/Auto-folder-terminal.png)

After making a choice, it asks me to enter the project name. The script then takes over, creating a main project folder in a pre-defined directory based on the project type.

Inside this main folder, the script generates a set of subfolders tailored to the specific needs of the project type.

- **Design Projects:**
  - Copy
  - Export
  - Image
  - Project Files
  - A Word document named `<project_name>_brief.docx`

  - **Work Projects:**
    - Copy
    - Export
    - Image
    - Project Files
    - A Word document named `<project_name>_brief.docx`

- **Video Projects:**
  - Audio
  - Footage
  - Image
  - Project Files
  - Export
  - A Word document named `<project_name>_brief.docx`

- **Idea Projects:**
  - Image
  - Project Files
  - A Word document named `<project_name>_brief.docx`

By automating the creation of your project folders, this script frees me up to focus on the creative aspects of your work. No more fiddling around with folder structures or worrying about forgetting to create an important subfolder. Everything is set up and ready to go in seconds, ensuring I can hit the ground running.

One of the best features of this script is its flexibility. Need additional folders for a particular project type? Want to include different file types or templates? No problem. You can easily customize the script to suit your unique workflow needs. The script is a foundation you can build upon, adapting it to whatever requirements you have.

If you want to check out the source files they are available here - [Github/Auto-folder-creation](https://github.com/tomlowndes/Auto-folder-creation).
