---
title: "How to Set Up pfSense with a Zyxel Switch and UniFi Access Point for VLAN Segmentation"
description: "A practical guide to configuring VLANs for Guest, IoT, and Office networks using pfSense, a Zyxel managed switch, and UniFi access points for enhanced security and network organization."
date: 2025-07-18
tags: [networking, pfsense, zyxel, unifi, VLAN, homelab, small-business]
draft: false
---

If you're serious about improving your network's security and performance, segmenting your devices into VLANs (Virtual LANs) is a critical step. In this guide, I will walk you through setting up VLANs using **pfSense** as your router/firewall, a **Zyxel managed switch**, and a **UniFi access point**. We'll create separate VLANs for **Guest**, **IoT**, and **Office** networks to keep your critical infrastructure isolated from less-trusted devices.

## Why Use VLANs?

Before jumping into the setup, let’s clarify why VLANs matter:

- **Security**: Keep potentially insecure IoT devices away from sensitive office equipment.  
- **Performance**: Reduce unnecessary broadcast traffic between unrelated devices.  
- **Access Control**: Enforce different firewall rules and permissions per VLAN.  
- **Professionalism**: Guest devices get internet access but can't see your work files.

## Network Overview

### Core Components:
- **pfSense** (Firewall/Router)  
- **Zyxel GS1900 Series Switch** (or similar managed switch)  
- **UniFi AP** (WiFi access point managed via UniFi Controller)  

## VLAN Structure Example

| VLAN Name | VLAN ID | Purpose     | Subnet          |
|-----------|---------|-------------|-----------------|
| Office    | 10      | Work devices | 192.168.10.0/24 |
| IoT       | 20      | IoT devices  | 192.168.20.0/24 |
| Guest     | 30      | Guest devices| 192.168.30.0/24 |

## Step-by-Step Setup

### 1. Configure pfSense VLANs

#### Interfaces > Assignments > VLANs
- Parent Interface: Your LAN port (e.g., igb1)
- Create VLAN 10 (Office), VLAN 20 (IoT), VLAN 30 (Guest)

#### Interfaces > Assignments
- Assign each VLAN to a new interface (OPT1, OPT2, etc.)
- Enable each interface and set static IPs:
  - Office: 192.168.10.1/24
  - IoT: 192.168.20.1/24
  - Guest: 192.168.30.1/24

#### DHCP Servers
- Enable DHCP for each VLAN with appropriate ranges.

#### Firewall Rules
- Block inter-VLAN traffic unless explicitly required.
- Example: IoT cannot initiate connections to Office VLAN.

### 2. Configure Zyxel Switch

#### VLAN Setup
- Go to **Advanced Application > VLAN > VLAN Configuration**
- Create VLANs 10, 20, 30 and name them accordingly.

#### Port Configuration
- Trunk port (Uplink to pfSense): Tagged for VLANs 10, 20, 30.
- Access ports:
  - Office devices: Untagged VLAN 10
  - IoT devices: Untagged VLAN 20
  - Guest devices: Untagged VLAN 30
- Ensure PVID matches untagged VLAN on each port.

### 3. Configure UniFi AP

#### Wireless Networks (via UniFi Controller)
Create three SSIDs:
1. **Office-WiFi**
    - VLAN: 10
2. **IoT-WiFi**
    - VLAN: 20
3. **Guest-WiFi**
    - VLAN: 30
    - Enable guest isolation for extra security.

#### Network Settings
- Ensure the uplink port to the Zyxel switch is tagged for VLANs 10, 20, 30.

## Testing the Setup

Verify each VLAN behaves as intended:
- **Office VLAN**: Access to printers, servers, internal resources.
- **IoT VLAN**: Only internet access, no access to Office VLAN.
- **Guest VLAN**: Internet-only, strict isolation.

Use tools like `traceroute`, `ping`, or port scanning to confirm segmentation.

## Bonus: pfSense Tips for Optimization

- **DNS Resolver Overrides**: Ensure VLANs use pfSense for DNS but restrict IoT/Guest from querying LAN resources.
- **Firewall Aliases**: Simplify rules management with VLAN groupings.
- **Traffic Shaping**: Prioritize Office traffic if bandwidth is limited.

## Final Thoughts

This setup provides a secure, professional network foundation suitable for small businesses or home labs. By isolating traffic with VLANs, you greatly reduce the risk of breaches, malware spreading, or accidental data exposure. While the hardware brands may vary, the concepts apply broadly.

If you'd like a deeper dive into creating firewall rules or best practices for VLAN security policies, reach out. I’m happy to help.

## Related Posts You Might Like
- [Why Your IoT Devices Should Never Be on Your Main Network](#)
- [Beginner’s Guide to pfSense Firewall Rules](#)
- [How to Optimize UniFi Wireless for Business Networks](#)
