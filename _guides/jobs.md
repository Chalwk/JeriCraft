---
title: Jobs
permalink: /guides/jobs/
---

<!-- Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. -->

# JeriCraft Jobs Plugin Guide

The **Jobs plugin** is a vital part of our server's economy, offering you the chance to earn in-game currency and gain
experience by completing various tasks. Whether you prefer building, exploring, or crafting, there's a job for you! In
this guide, we'll walk you through the essentials of joining jobs, using the commands, and succeeding in your chosen
profession.

<img src="{{ site.baseurl }}/assets/images/advertising/jobs.png" alt="img">

---

{% include toc.html %}

---

## Available Jobs

Choose from a diverse range of jobs that cater to different play styles. Each job offers unique rewards and
opportunities to earn currency and level up. Below is an overview of the available jobs and their primary focus:

| **Job**                | **Focus**                                                                |
| ---------------------- | ------------------------------------------------------------------------ |
| **Alchemist**          | Crafting potions and potions of various effects                          |
| **Aquatic Adventurer** | Diving, fishing, salvaging treasures, and exploring aquatic environments |
| **Baker**              | Baking delicious bread and sweets                                        |
| **Builder**            | Placing blocks and constructing buildings and structures                 |
| **Brewer**             | Brewing potent potions for various effects                               |
| **Caretaker**          | Taking care of animals and pets                                          |
| **Chef**               | Preparing delicious meals to feed others                                 |
| **Crafter**            | Crafting various items and blocks                                        |
| **Digger**             | Excavating earth materials (dirt, sand, gravel, etc.)                    |
| **Enchanter**          | Enchanting items with magical properties                                 |
| **Explorer**           | Exploring new areas and discovering hidden treasures                     |
| **Farmer**             | Growing and harvesting crops                                             |
| **Fisherman**          | Catching fish and other aquatic creatures                                |
| **Herbalist**          | Gathering herbs and plants for alchemical research                       |
| **Hunter**             | Tracking and defeating hostile mobs                                      |
| **Jeweler**            | Crafting and repairing jewelry                                           |
| **Librarian**          | Collecting and organizing knowledge, including enchanting                |
| **Merchant**           | Trading and selling goods and services                                   |
| **Miner**              | Extracting valuable ores and minerals                                    |
| **Smelter**            | Smelting materials into useful items                                     |
| **Taster**             | Tasting and enjoying delicious food                                      |
| **Toolsmith**          | Crafting and refining tools                                              |
| **Weaponsmith**        | Crafting and refining weapons                                            |
| **Woodcutter**         | Cutting down trees and gathering wood                                    |

## Essential Commands

Here's a table of essential commands to help you navigate the JeriCraft Jobs plugin with ease:

| **Command**         | **Description**                                                                 |
| ------------------- | ------------------------------------------------------------------------------- |
| `/jobs join <job>`  | Join a specific job. Replace `<job>` with the name of the job you want to join. |
| `/jobs info <job>`  | View detailed information about a specific job, its requirements, and payouts.  |
| `/jobs`             | List the jobs you are currently enrolled in.                                    |
| `/jobs stats`       | View your job stats, including experience, levels, and earnings for each job.   |
| `/jobs browse`      | Browse available jobs and their requirements to find one that suits you.        |
| `/jobs leave <job>` | Leave a specific job. This will reset your progress in that job.                |
| `/jobs list`        | List all available jobs on the server.                                          |
| `/jobs help`        | Access a list of all Jobs plugin commands and their descriptions.               |
| `/bal`              | Check your current in-game currency balance.                                    |
| `/baltop`           | View the leaderboard of the wealthiest players.                                 |

By utilizing these commands, you'll be on your way to earning money and gaining experience.
Happy working, and we wish you success in your career!

## Boosters

Throughout the day and week, special boosters activate to reward players working specific jobs at specific times.
Boosters stack rewards on top of your normal earnings, so timing your work around them is a great way to level up
faster and earn more. All times below are listed in **NZST**.

| Booster                     | Time (NZST)       | Days                        | Jobs Boosted                  | XP Multiplier | Money Multiplier |
| --------------------------- | ----------------- | --------------------------- | ----------------------------- | ------------- | ---------------- |
| **Night Watch**             | 12:00AM - 2:45AM  | All                         | All                           | 2x            | 2x               |
| **Arcane Dawn**             | 3:00AM - 5:00AM   | Tuesday, Thursday, Sunday   | Enchanter, Jeweler            | 2.5x          | 1.5x             |
| **Dawn's Harvest**          | 6:00AM - 8:45AM   | All                         | Farmer, Herbalist, Baker      | 2x            | 1.75x            |
| **Timber!**                 | 8:00AM - 10:45AM  | Monday, Wednesday, Friday   | Woodcutter, Builder           | 1.75x         | 2x               |
| **Chapel Bell Rings**       | 8:45AM - 10:30AM  | Sunday                      | All                           | 1.5x          | 1.5x             |
| **High Tide Harvest**       | 9:00AM - 11:45AM  | Saturday, Sunday            | Aquatic Adventurer, Fisherman | 1.75x         | 2x               |
| **Trade Winds Blow**        | 11:00AM - 12:45PM | Tuesday, Thursday           | Merchant, Crafter             | 1.75x         | 2x               |
| **Forge Hours**             | 1:00PM - 3:45PM   | Monday, Wednesday, Friday   | Miner, Smelter, Weaponsmith   | 2.25x         | 2x               |
| **Deep Delving Hours**      | 1:00PM - 3:45PM   | Tuesday, Thursday           | Digger, Miner                 | 2x            | 2x               |
| **Royal Feast Preparation** | 4:00PM - 6:45PM   | Saturday, Sunday            | Cooker, Brewer, Baker         | 2.5x          | 1.75x            |
| **Stewardship**             | 4:00PM - 6:45PM   | Monday, Wednesday, Friday   | Caretaker, Herbalist          | 2x            | 1.75x            |
| **Hunter's Moon**           | 7:00PM - 9:45PM   | Tuesday, Thursday, Saturday | Hunter, Fisherman             | 2x            | 2.5x             |
| **Mystical Twilight**       | 7:00PM - 9:45PM   | Wednesday, Friday           | Alchemist, Herbalist          | 3x            | 1.5x             |
| **Friday Night Forge**      | 10:00PM - 11:30PM | Friday                      | All                           | 2x            | 2x               |

**Notes:**
- Boosters are listed in chronological order by start time. Several overlap with others or run on the same days, so
  it's possible to stack multiple boosted jobs back to back throughout the day.
- Some boosters (like **Forge Hours** and **Deep Delving Hours**) share the same time window but boost different
  jobs, so plan your schedule around which profession you're working that day.
- The **Royal Feast Preparation** booster applies to the **Cooker** job specifically. If you don't see "Cooker" as
  a job option, check with staff, as the jobs list above may use a different name for this profession.
- Watch in-game chat for start and end announcements. Each booster broadcasts a reminder periodically while active,
  so you'll always know when a boost is live.