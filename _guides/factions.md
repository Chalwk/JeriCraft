---
title: Factions
permalink: /guides/factions/
---

<!-- Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. -->

# JeriCraft Factions Guide

Welcome to the **JeriCraft Factions System**! This guide will help you understand how to create and manage your faction,
claim land, build power, and raid enemy territories.

---

{% include toc.html %}

---

## Faction Creation & Management

The foundation of any great empire begins with its creation. Establish your own faction, forge alliances, and
carve your legacy into the lands of JeriCraft.

| **Command**                    | **Description**                                                                                                                                        |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/f create <name>`             | Establish your own kingdom and take the throne as its ruler.                                                                                           |
| `/f sethome`                   | Set your faction's home location (a safe haven for your kingdom). **Note:** You must first claim at least one chunk of land before you can set a home. |
| `/f setwarp <name> [password]` | Set a warp point for quick travel. Optional password for restricted access.                                                                            |
| `/f disband`                   | Dissolve your kingdom, scattering its people and relinquishing its lands.                                                                              |
| `/f perms`                     | Manage faction permissions for roles and actions.                                                                                                      |
| `/f announce <message...>`     | Broadcast a message to all faction members.                                                                                                            |
| `/f set tag <tag>`             | Change your kingdom's official banner (name).                                                                                                          |
| `/f set description <desc>`    | Set a short description for your kingdom.                                                                                                              |
| `/f delhome <name>`            | Remove your faction's home location.                                                                                                                   |
| `/f delwarp <name>`            | Remove a warp point.                                                                                                                                   |

---

## Faction Member Commands

A kingdom thrives on its people! Recruit allies, build a loyal court, and manage your ranks wisely.

| **Command**                 | **Description**                                                            |
| --------------------------- | -------------------------------------------------------------------------- |
| `/f join <faction>`         | Swear fealty to a faction and become its subject.                          |
| `/f leave`                  | Renounce your oath and walk your own path.                                 |
| `/f home`                   | Teleport to your faction's home location.                                  |
| `/f warp [name] [password]` | Teleport to a faction warp point. Optional password for restricted access. |
| `/f chat <mode>`            | Switch between faction, alliance, or public chat modes.                    |
| `/f toggle alliancechat`    | Toggle alliance chat on or off.                                            |

---

## Member Management

Manage your faction's members, ranks, and permissions to build a strong and loyal kingdom.

ℹ️ As a ruler, it is your duty to **build trust** and **reward loyalty**. Strong factions are forged through camaraderie
and strategy. More members mean **more power**, which allows your faction to **claim more land** and expand its
influence. Grant **leadership roles** to trusted members to help you manage your growing kingdom.

| **Command**                     | **Description**                                         |
| ------------------------------- | ------------------------------------------------------- |
| `/f invite <target>`            | Extend an invitation to a worthy knight or ally.        |
| `/f kick <target>`              | Exile a member from your faction.                       |
| `/f ban <target>`               | Ban a player from joining your faction.                 |
| `/f unban <target>`             | Unban a player, allowing them to rejoin your faction.   |
| `/f role <member> admin`        | Grant admin privileges to a member.                     |
| `/f role <member> coleader`     | Promote a member to co-leader.                          |
| `/f promote <name>`             | Elevate a member to a higher rank of leadership.        |
| `/f role <member> moderator`    | Grant moderator status to a member.                     |
| `/f demote <name>`              | Lower a member's rank.                                  |
| `/f deinvite <target>`          | Retract an invitation before it is accepted.            |
| `/f open`                       | Toggle whether your faction is open for anyone to join. |
| `/f set defaultrole <role>`     | Set the default role for new members.                   |
| `/f set title <player> [title]` | Set a custom title for a faction member.                |
| `/f banlist`                    | View a list of banned players.                          |

---

## Territory Management

A kingdom is nothing without its territory! Factions must **claim land** to establish castles, villages, and
fortifications.

ℹ️ **Important:** Factions are only enabled in the main survival world (`world`). You cannot claim land or perform faction actions in other worlds (e.g., the Nether or the End).

Once created, you become the **leader** of your faction, wielding the power to **expand your domain**,
**recruit allies**, and **command your kingdom's fate**. You can **manage your faction's land, power, and members** to
build an empire that stands the test of time.

| **Command**                        | **Description**                                                                                                         |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `/f claim [radius] [faction]`      | Seize control of a chunk of land for your kingdom.                                                                      |
| `/f unclaim [radius] [faction]`    | Relinquish a previously claimed territory.                                                                              |
| `/f autoclaim [faction]`           | Automatically claim chunks as you move.                                                                                 |
| `/f unclaimall`                    | Release all faction-owned land at once.                                                                                 |
| `/f list claims [world] [faction]` | List all claims for a specific world or faction.                                                                        |
| *(Server‑specific extensions)*     | *If you have additional claim commands (e.g., `/f claimfill`, `/f claimline`), they may still work – check with staff.* |

---

## Economy & Faction Banks

A kingdom is built on wealth! Manage your faction's finances to fund expansions and military endeavors.

ℹ️ For player economy (personal accounts / jobs, etc.), please refer to [Economy Guide]({{site.baseurl}}/guides/economy).

| **Command**                                   | **Description**                                               |
| --------------------------------------------- | ------------------------------------------------------------- |
| `/f money`                                    | View the faction's current bank balance.                      |
| `/f money deposit <amount> [faction]`         | Deposit a specific amount of money into the faction's bank.   |
| `/f money withdraw <amount> [faction]`        | Withdraw a specified amount of money from the faction's bank. |
| `/f money balance`                            | See the available funds in the faction bank.                  |
| `/f money send <amount> <player/faction>`     | Send money from your personal balance to a player or faction. |

---

## Player Commands

These commands are available to all players for managing their faction and gameplay experience.

| **Command**                | **Description**                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------- |
| `/f map [on/off]`          | View the faction map of the area around you.                                             |
| `/f map --set-height <n>`  | Set how many lines your `/f map` will show.                                              |
| `/f coords`                | Send faction members your current position.                                              |
| `/f near`                  | Show nearby faction members.                                                             |
| `/f status`                | Show status of all players in your faction.                                              |
| `/f top <criteria> [page]` | List top factions by criteria (members, start, power, land, online, money).              |
| `/f stuck`                 | Attempt to teleport to the nearest wilderness chunk.                                     |
| `/f toggle scoreboard`     | Toggle the factions scoreboard on or off (shortcut: `/f sb`).                            |
| `/f toggle seechunk`       | See outlines around the border of the chunk you're standing in (shortcut: `/f sc`).      |
| `/f boom [on/off]`         | Toggle peaceful explosions in your faction's territory.                                  |
| `/f seechunk`              | See the chunk you're in (represented with particles): Green = Claimed, Gray = Unclaimed. |

---

## Additional Useful Commands

These are core commands that every faction player should know – they cover relations, information, vaults, TNT, and more.

| **Command**                                      | **Description**                                                            |
| ------------------------------------------------ | -------------------------------------------------------------------------- |
| `/f show [faction]`                              | Display detailed information about a faction (members, land, power, etc.). |
| `/f list [page]`                                 | List all factions on the server, sorted by power.                          |
| `/f list claims [faction]`                       | List all claimed chunks for a faction.                                     |
| `/f list invites`                                | Show pending invitations for your faction.                                 |
| `/f list bans`                                   | Show banned players for your faction.                                      |
| `/f relation <faction> ally/enemy/neutral/truce` | Set your faction's relationship with another faction.                      |
| `/f power [player]`                              | Check your own or another player's current power.                          |
| `/f vault <number>`                              | Access your faction's vault (shared storage).                              |
| `/f tnt`                                         | View your faction's TNT bank (used for raiding).                           |
| `/f tnt deposit <amount>`                        | Deposit TNT into your faction's bank.                                      |
| `/f tnt withdraw <amount>`                       | Withdraw TNT from your faction's bank.                                     |
| `/f shield`                                      | View your faction's shield status (protects against raids).                |
| `/f shield activate`                             | Activate your faction's shield (if available).                             |
| `/f upgrades`                                    | View available faction upgrades and their costs.                           |
| `/f clear claims`                                | Remove all claims (use with caution).                                      |
| `/f clear invites`                               | Clear all outstanding invitations.                                         |
| `/f clear bans`                                  | Clear all bans from your faction.                                          |

---

## Base Cost to Claim Land

Each chunk of land requires **[power](#-power-system)** to maintain, and your **faction's total power** determines how
much land can be claimed.

The base cost to claim land is **$30**, and each additional claim increases the cost by **a fixed $15** from the
previous claim. This results in a steady linear increase as your faction expands.

### Claim Cost Scaling

| Claim # | Cost Formula             | Cost |
| ------- | ------------------------ | ---: |
| 1st     | Base Cost                |  $30 |
| 2nd     | Previous Cost + $15      |  $45 |
| 3rd     | Previous Cost + $15      |  $60 |
| 4th     | Previous Cost + $15      |  $75 |
| 5th     | Previous Cost + $15      |  $90 |
| 6th     | Previous Cost + $15      | $105 |
| ...     | `Base Cost + 15 × (n-1)` |  ... |

This linear scaling ensures that larger factions must carefully manage their resources while expanding their territory.

---

## Power System

Power determines how much land your faction can **claim** and **defend**.
Recruit members to **strengthen your kingdom**.

---

### Power Limits & Gains

- **Max Faction Power:** `1000` → The total power a faction can have.
- **Max Power per Player:** `100` → The maximum power a single player can have.
- **Min Power per Player:** `-20` → Prevents rapid recovery after multiple deaths.
- **Starting Power:** `5` → The initial power each player starts with.
- **Power Regeneration Rate:** `0.2 per minute` → How quickly power regenerates over time.
- **Power Freeze Duration:** `45 seconds` → The time power gain is frozen after death.

---

### Power Loss & Raidability

- **Power Loss Per Death:** `5` → How much power a player loses when they die.
- **Offline Power Loss:** `-0.4 per day` → How much power is lost daily while offline.
- **Offline Power Loss Limit:** `5` → The lowest power a player can reach due to inactivity.
- **Players Can Leave While Negative Power:** ✅ `true`
- **Raidability Enabled:** ✅ `true` → Factions can be raided if their land exceeds their power.
- **Raidable at Land >= Power:** ❌ `false` → Requires land to be greater than power for raidability.

---

## Power & PvP Mechanics

### Power Transfer & Stealing

- **Vampirism (Power Stealing):** `0.5` → Killers receive 50% of the power lost by their target.

### War Zones

- PvP is always enabled.
- **WarZone Power Loss:** ✅ `true` → Players lose power when dying in war zones.

### Safe Zones

- No PvP or building allowed.

### Wilderness

- **Wilderness Power Loss:** ✅ `true` → Players lose power when dying in the wilderness.
- **Wilderness:** No protections; players can build and PvP freely.

### Peaceful Factions

- **Peaceful Members Power Loss:** ❌ `false` → Peaceful faction members do not lose power.

---

## Miscellaneous

- **Power Regenerates While Offline:** ❌ `false`
- **Respawn Home from No Power Loss Worlds:** ✅ `true`

---

## Faction Relations & Limits

Factions can form alliances, truces, or enmity with other factions. Manage your relationships wisely!

- **Maximum Enemies:** `10`
- **Maximum Allies:** `5`
- **Maximum Truces:** `5`
- **Neutral Relations:** Unlimited