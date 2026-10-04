---
layout: default
title: About
description: About JeriCraft - a medieval Minecraft server
permalink: /about/
---

<!-- Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. -->

<section class="page-hero">
  <div class="page-hero-content">
    <h1>About JeriCraft</h1>
    <p class="page-hero-description">
      JeriCraft is a <strong>Medieval-themed SMP/RPG Factions server</strong>
      operating on <strong>Minecraft Java Edition</strong>. Its architecture and
      overall aesthetic are inspired by the <strong>Late Middle Ages</strong>,
      roughly <strong>1320-1400</strong>, with a strong Northern European influence,
      particularly Scandinavian, Hanseatic, and North German styles.
      <br><br>
      At its heart, JeriCraft is about <strong>player choice and community</strong>.
      Every player shapes their own legend, where alliances are forged, kingdoms
      rise and fall, and fortunes are made through trade or cunning conquest.
      <br><br>
      JeriCraft features an <strong>RPG progression system</strong>. You can choose
      from more than twenty specialized professions like Alchemist, Hunter, or
      Miner through our <strong>Jobs</strong> system, and level up combat and
      crafting skills with <strong>mcMMO</strong>. <strong>Factions</strong> and
      territory management allow you to claim land, build fortresses, forge
      alliances, and wage war.
      <br><br>
      The <strong>player-driven economy</strong>, alongside
      <strong>NPC Merchants</strong>, is another core feature. Players can set up
      Chest Shops, profit from daily Job Quests, and purchase goods from NPCs.
      <br><br>
      The world itself is dynamic, with <strong>four distinct seasons</strong>
      that affect crop growth, mob behavior, and resource scarcity. Players also
      face custom, adaptive, scaling mobs that grow deadlier as they progress.
    </p>
    <div class="page-hero-meta">
      <span><i class="fas fa-shield-alt" aria-hidden="true"></i> Factions &amp; Warfare</span>
      <span><i class="fas fa-coins" aria-hidden="true"></i> Player-Driven Economy</span>
      <span><i class="fas fa-dragon" aria-hidden="true"></i> RPG Progression</span>
      <span><i class="fas fa-users" aria-hidden="true"></i> Friendly Community</span>
    </div>
  </div>
</section>

<section class="page-content">
  {% capture about_content %}{% include about.md %}{% endcapture %}
  {{ about_content | markdownify }}
</section>