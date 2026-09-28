---
title: mcMMO
permalink: /guides/mcmmo/
description: "Level skills, ready your tools and unlock powerful abilities."
icon: fa-fist-raised
order: 5
---

<!-- Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. -->

# JeriCraft mcMMO Guide

Welcome to JeriCraft's **mcMMO** experience! mcMMO adds an RPG-style skill system to Minecraft. The more you do something, the better you get at it, and the more perks you unlock along the way.

<img src="{{ site.baseurl }}/assets/images/advertising/mcmmo.png" alt="mcMMO plugin banner">

---

{% include toc.html %}

---

## Getting Started

There's nothing to sign up for. Just play. Mining earns Mining XP, fighting with a sword earns Swords XP, harvesting crops earns Herbalism XP, and so on. As a skill levels up, you unlock new perks, better drops and powerful **active abilities**.

Type `/mcstats` at any time to see your skill levels and total power level.

---

## Commands

| Command          | Description                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| `/mcstats`       | Shows all of your skill levels and your power level.                                                  |
| `/mcmmo`         | Shows plugin information and a pointer to the help pages.                                             |
| `/<skill>`       | Shows details for one skill, e.g. `/mining`, `/swords`, `/herbalism`. Includes unlocks and next rank. |
| `/mcrank`        | Shows your leaderboard rank in each skill.                                                            |
| `/mctop [skill]` | Shows the top players overall, or for a single skill.                                                 |
| `/mcability`     | Toggles whether right-clicking readies your tools for active abilities.                               |
| `/mcc`           | Lists all mcMMO commands.                                                                             |
| `/party`         | Party management (see [Party System](#party-system)).                                                 |
| `/p`             | Toggles party chat.                                                                                   |

---

## Skill Categories

### Gathering Skills

| Skill           | What it does                                                            |
| --------------- | ----------------------------------------------------------------------- |
| **Mining**      | Double drops from ores and stone, plus the Super Breaker ability.       |
| **Woodcutting** | Double drops from logs, plus the Tree Feller ability.                   |
| **Excavation**  | Finds treasure while digging, plus the Giga Drill Breaker ability.      |
| **Herbalism**   | Bonus crop drops, easier replanting, plus the Green Terra ability.      |
| **Fishing**     | Better treasure, shaking loot from mobs, and faster bites as you level. |

### Combat Skills

| Skill       | What it does                                                                   |
| ----------- | ------------------------------------------------------------------------------ |
| **Swords**  | Bleed damage (Rupture), counter-attacks, and the Serrated Strikes ability.     |
| **Axes**    | Critical strikes, extra damage against armour, and the Skull Splitter ability. |
| **Archery** | Extra arrow damage, dazing targets, and a chance to retrieve arrows.           |
| **Unarmed** | Bonus fist damage, arrow deflection, disarming, and the Berserk ability.       |
| **Taming**  | Stronger, tougher pets and the ability to call wolves or cats to your side.    |

Depending on the server version, newer weapon skills may also appear. `/mcstats` always lists every skill available to you.

### Miscellaneous Skills

| Skill          | What it does                                                                   |
| -------------- | ------------------------------------------------------------------------------ |
| **Acrobatics** | Reduces or negates fall damage (Roll) and helps you dodge attacks.             |
| **Alchemy**    | Faster brewing and access to extra potion recipes.                             |
| **Repair**     | Repair tools and armour on an iron block anvil, with a chance at Super Repair. |
| **Salvage**    | Break down gear on a gold block anvil to recover materials.                    |
| **Smelting**   | Faster fuel use, a chance at extra smelting output, and more vanilla XP.       |

---

## Active Abilities

Active abilities are the big temporary boosts. Each one belongs to a specific skill and has a duration and a cooldown.

**How to use one:**

1. Hold the matching tool (pickaxe, axe, shovel, hoe, sword or empty hand).
2. **Right-click** to *ready* it. You'll see a message in chat.
3. Hit a block or mob with it before the ready state runs out to activate the ability.

| Ability                | Skill       | Tool      | Effect                                                               |
| ---------------------- | ----------- | --------- | -------------------------------------------------------------------- |
| **Super Breaker**      | Mining      | Pickaxe   | Breaks blocks extremely fast and boosts drops.                       |
| **Tree Feller**        | Woodcutting | Axe       | Fells a whole tree in one swing.                                     |
| **Giga Drill Breaker** | Excavation  | Shovel    | Digs extremely fast and can turn up extra treasure.                  |
| **Green Terra**        | Herbalism   | Hoe       | Boosts crop drops and spreads plant growth around you.               |
| **Serrated Strikes**   | Swords      | Sword     | Hits nearby enemies and causes bleeding.                             |
| **Skull Splitter**     | Axes        | Axe       | Deals area damage to nearby enemies.                                 |
| **Berserk**            | Unarmed     | Bare fist | Greatly boosts fist damage and lets you break some blocks instantly. |

**Blast Mining** (Mining) is a little different: sneak and right-click TNT with a pickaxe to detonate it from a distance for a large ore yield.

The level at which each ability and perk unlocks depends on the server's mcMMO settings. Run `/<skill>` (for example `/mining`) to see exactly what you've unlocked and what comes next.

> **Tip:** If abilities keep readying when you don't want them to (say, while placing blocks), use `/mcability` to turn the behaviour off, and on again when you're ready to use them.

---

## Party System

A **party** lets you team up and share XP while working on skills together.

| Command                  | Description                        |
| ------------------------ | ---------------------------------- |
| `/party create <name>`   | Create a new party.                |
| `/party invite <player>` | Invite a player to your party.     |
| `/party accept`          | Accept a pending party invitation. |
| `/party leave`           | Leave your current party.          |
| `/p`                     | Toggle party chat on or off.       |

Party members can share XP for certain activities, which speeds up levelling for everyone involved.

---

## Working with Levelled Mobs

mcMMO pairs naturally with [Levelled Mobs]({{ site.baseurl }}/guides/levelled-mobs/). Higher combat skills make tougher mobs far more manageable, and stronger mobs are a great source of combat XP.

---

## Conclusion

Pick a skill, start using it, and keep an eye on `/mcstats`. Every swing, dig and harvest moves you closer to your next unlock.

For the full details on every skill, visit the [official mcMMO plugin page](https://www.spigotmc.org/resources/official-mcmmo-original-author-returns.64348/).
