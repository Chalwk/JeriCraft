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
    {% assign shop_icon = 'fa-store' %}
    {% case shop.title %}
      {% when 'Alchemist' %}{% assign shop_icon = 'fa-flask' %}
      {% when 'Arrowsmith' %}{% assign shop_icon = 'fa-bullseye' %}
      {% when 'Beekeeper' %}{% assign shop_icon = 'fa-bug' %}
      {% when 'Blacksmith' %}{% assign shop_icon = 'fa-hammer' %}
      {% when 'Farmer' %}{% assign shop_icon = 'fa-wheat-awn' %}
      {% when 'Fisherman' %}{% assign shop_icon = 'fa-fish' %}
      {% when 'Florist' %}{% assign shop_icon = 'fa-spa' %}
      {% when 'Hawker' %}{% assign shop_icon = 'fa-sack-dollar' %}
      {% when 'Hunter' %}{% assign shop_icon = 'fa-paw' %}
      {% when 'Innkeeper' %}{% assign shop_icon = 'fa-bed' %}
      {% when 'Lumberjack' %}{% assign shop_icon = 'fa-tree' %}
      {% when 'Quarry Master' %}{% assign shop_icon = 'fa-mountain' %}
      {% when 'Saddler' %}{% assign shop_icon = 'fa-horse' %}
      {% when 'Scribe' %}{% assign shop_icon = 'fa-feather-pointed' %}
      {% when 'Weaponsmith' %}{% assign shop_icon = 'fa-khanda' %}
    {% endcase %}
    <a class="guide-card" href="{{ shop.url | relative_url }}">
      <span class="guide-card-icon" aria-hidden="true">
        <i class="fas {{ shop_icon }}"></i>
      </span>
      <div>
        <h3>{{ shop.title }}</h3>
        {% if shop.description %}
          <p>{{ shop.description }}</p>
        {% endif %}
        <p><strong>Warp:</strong> <code>/warp {{ shop.title | downcase }}</code></p>
      </div>
    </a>
  {% endfor %}
</div>