---
title: "Proxmox and Homeassistant"
description: "Creating a proxmox server."
date: "12/12/2024"
---

For years now I have had Home Assistant running on a Raspberry PI 3 with great sucsess and hardly any issues, but as I have added more sensors and automations I noticed the lack of 
prosessing power was starting to take its toll, and performance and reliability was starting to show it's ugly head.

My solution was to install HA (Home assistant) on a windows pc I was using as a Plex server, Plex is a system that allows you to watch your saved media on compatible devices.(plex link). So with a coffee and a Remote connection to that pc I installed HA on a virtualbox, which was pretty streight foward, then took a few hours to pass a USB Zigbee device through to that Virtual Machince. (Remember this is not a tuturial this is the ramblings of a madman...)  

### Moving to Proxmox

A few months of Virtual machines crashing or the PC just turning off I knew a solution was needed to make this A) more steamlined, and B) more reliable. Enter Proxmox a way on spinning up virtual machines for a specific app quickly and easily. 

So with a USB stick with Proxmox I plugged it in and did a full install on my windows pc Sever and within 30mins we where done. With the IP adress i remoted into the controll panel, and followed a tuturial to install HA. It worked sucsess, and even the USB zigbee controller just works, no messing around.

### Testing and Final Adjustments
After the initial setup, I spent a few days fine-tuning the system. The performance boost was immediately noticeable. Automations executed faster, the interface was snappier, and the reliability issues were a thing of the past. I also took the opportunity to organize and clean up my automations, removing old or unused ones and optimizing the more complex flows.

One of the great advantages of Proxmox is its ability to manage multiple virtual machines efficiently. I decided to experiment by spinning up other lightweight VMs for various tasks, such as a dedicated MQTT broker and a Node-RED instance. This modular approach not only made the system more robust but also easier to maintain.

Additionally, I migrated my Plex server to Proxmox, which streamlined its management and freed up the Windows OS. To make things even smoother, I created linked folders to my NAS, allowing Plex to access my entire media library seamlessly. This setup ensures that my media stays centralized while still being easily accessible for playback and updates.

I also added an ARR stack (Automated Radarr, Sonarr, and related services) to manage media downloads more effectively alongside Plex. This integration has streamlined my media experience, ensuring everything is organized and ready to play across my devices.

Plans for the Future
Looking ahead, I plan to add a VPN server to the setup to securely access my home network remotely. This will provide an extra layer of security and convenience, allowing me to manage my smart home and media systems from anywhere without compromising privacy.

### Lessons Learned
Looking back, here are a few key takeaways from my journey:

Scalability Matters: As your smart home setup grows, ensure your hardware can keep up. The Raspberry Pi served me well, but there comes a point where more processing power is essential.

Research Alternatives: VirtualBox was a good interim solution, but Proxmox turned out to be a far better fit for my needs. Exploring new tools and platforms can lead to significant improvements.

Test and Iterate: Transitioning to a new platform isn’t always smooth, but persistence and incremental improvements pay off.

### Conclusion

Migrating Home Assistant to Proxmox has been a game-changer. Not only has it enhanced the performance and reliability of my smart home setup, but it has also opened up opportunities for future expansion. If you're hitting the limits of your current setup, I can't recommend Proxmox enough. Just remember to keep your backups handy and approach the migration one step at a time!

What’s next? Maybe integrating even more sensors, refining the VPN implementation, or exploring advanced automations—but that’s a story for another day.





