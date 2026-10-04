---
layout: default
title: NPC Shops
description: All JeriCraft NPC shops
permalink: /npc-shops/
---

<!-- Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. -->

{% include shops-sorted.html %}

<h1>NPC Shops</h1>
<p>Browse the merchants of JeriCraft. Pick a shop to see what they buy and sell, or search for an item to see who stocks it.</p>

<input type="search" class="filter-input" placeholder="Search shops or items..." aria-label="Search shops or items"
       data-shop-search="{{ '/npc-shops.json' | relative_url }}"
       data-filter-empty="#shop-empty">
<p class="filter-empty" id="shop-empty" hidden>No shops match that search.</p>

<div class="guide-grid">
  {% for shop in sorted_shops %}
    <a class="guide-card" href="{{ shop.url | relative_url }}">
      <span class="guide-card-icon" aria-hidden="true">
        <i class="fas {{ shop.icon | default: 'fa-store' }}"></i>
      </span>
      <div>
        <h3>{{ shop.title }}</h3>
        {% if shop.description %}
          <p>{{ shop.description }}</p>
        {% endif %}
      </div>
    </a>
  {% endfor %}
</div>