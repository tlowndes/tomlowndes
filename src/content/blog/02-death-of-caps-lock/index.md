---
title: "The Death of Caps Lock, Embracing the Hyper Key"
description: "I hate Caps lock, it does one thing and one thing only, this needs to change."
date: "05/14/2024"
---

In the fast-paced world of design and technology, every keystroke counts. As a designer, I find the Caps Lock key to be largely redundant in my daily workflow. Instead, I rely heavily on shortcuts in programs like DaVinci Resolve, InDesign, and Illustrator. To streamline my productivity, I use an Elgato Stream Deck for launching applications and accessing frequently used shortcuts and automations.

The Caps Lock key, originally designed for typewriters to capitalize entire words or sentences, has become obsolete in modern computing. Most people use Shift for capitalization, leaving Caps Lock largely unused. This prime real estate on our keyboards could be put to better use.

## Introducing the Hyper Key

The Hyper Key is a powerful replacement for the Caps Lock key on any keyboard, designed to enhance your efficiency by adding customizable shortcuts. By remapping the Caps Lock key to act as a modifier key (like Ctrl, Alt, or Shift), you can unlock a plethora of new shortcuts and commands. After some research, I discovered that AutoHotkey can be used to create a Hyper Key on Windows, transforming my workflow.

### Why the Hyper Key?

1. **Increased Productivity**: Access frequently used functions quickly.
2. **Customization**: Tailor shortcuts to your specific needs.
3. **Efficiency**: Reduce the need to switch between keyboard and mouse.
4. **Ergonomics**: Minimize repetitive strain by reducing unnecessary movements.

## My AutoHotkey Setup

Below are the keybinds I've configured. This setup is a work in progress, and the files are available on my [GitHub](https://github.com).

### Keybinds

#### CapsLock Switcher:
- **CapsLock**: Toggle CapsLock On/Off

#### Program Launcher:
- **CapsLock + e**: Launch Web Search (opens Opera and DuckDuckGo)
- **CapsLock + r**: Launch Termius
- **CapsLock + d**: Launch Notion

#### Direction Navigator:
- **CapsLock + h**: Move Left
- **CapsLock + j**: Move Down
- **CapsLock + k**: Move Up
- **CapsLock + l**: Move Right

#### Page Navigator:
- **CapsLock + u**: Page Up
- **CapsLock + p**: Page Down

#### Mouse Controller:
- **CapsLock + Arrow Keys**: Move Mouse
- **CapsLock + Enter (Push/Release)**: Left Mouse Click

#### Text Deletion:
- **CapsLock + n**: Ctrl + Delete (Delete Word)
- **CapsLock + m**: Delete
- **CapsLock + ,**: Backspace
- **CapsLock + .**: Ctrl + Backspace

## How to Create a Hyper Key on Windows with AutoHotkey

1. **Download and Install AutoHotkey**: Visit the [AutoHotkey website](https://www.autohotkey.com) and download the latest version.
2. **Create a New Script**: Open Notepad and save a new file with the .ahk extension.
3. **Define Your Keybinds**: Copy and paste your desired keybinds into the script.
4. **Run the Script**: Double-click your .ahk file to run it.

The Caps Lock key might be a relic of the past, but with a little creativity and tools like AutoHotkey, it can be transformed into a powerful tool for modern workflows. By repurposing it as a Hyper Key, you can unlock new levels of productivity and efficiency in your daily tasks.

Embrace the future of computing by optimizing every key on your keyboard. For more insights and updates, follow me on GitHub and Twitter.
