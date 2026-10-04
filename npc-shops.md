---
layout: default
title: NPC Shops
description: All JeriCraft NPC shops
permalink: /npc-shops/
---

<!-- Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. -->

{% include shops-sorted.html %}

<section class="page-hero">
  <div class="page-hero-content">
    <h1>NPC Shops</h1>
    <p class="page-hero-description">
      Browse our NPC merchants. Each trader keeps their own stock and their own
      prices. Pick a shop to see what they buy and sell, or search for an item to find out
      who stocks it.
    </p>
    <div class="page-hero-meta">
      <span><i class="fas fa-user-tie" aria-hidden="true"></i> {{ sorted_shops.size }} merchants</span>
      <span><i class="fas fa-magnifying-glass" aria-hidden="true"></i> Searchable by item</span>
      <span><i class="fas fa-location-dot" aria-hidden="true"></i> Fast-travel warps</span>
    </div>
  </div>
</section>

<section class="page-content">
  <input type="search" class="filter-input" placeholder="Search shops or items..." aria-label="Search shops or items"
         data-shop-search="{{ '/npc-shops.json' | relative_url }}"
         data-filter-empty="#shop-empty">
  <p class="filter-empty" id="shop-empty" hidden>No shops match that search.</p>

  {%- assign cat_farm_titles = "Farmer,Fisherman,Hunter,Lumberjack,Beekeeper" | split: "," -%}
  {%- assign cat_forge_titles = "Blacksmith,Weaponsmith,Arrowsmith,Quarry Master" | split: "," -%}
  {%- assign cat_arcane_titles = "Alchemist,Scribe,Florist" | split: "," -%}
  {%- assign cat_market_titles = "Hawker,Innkeeper,Saddler" | split: "," -%}

  {%- assign cat_farm = sorted_shops | where_exp: "s", "cat_farm_titles contains s.title" -%}
  {%- assign cat_forge = sorted_shops | where_exp: "s", "cat_forge_titles contains s.title" -%}
  {%- assign cat_arcane = sorted_shops | where_exp: "s", "cat_arcane_titles contains s.title" -%}
  {%- assign cat_market = sorted_shops | where_exp: "s", "cat_market_titles contains s.title" -%}

  {% if cat_farm.size > 0 %}
  <section class="guide-section shop-section">
    <h2 class="guide-section-heading">
      <i class="fas fa-seedling" aria-hidden="true"></i>
      Farm, Field &amp; Forest
      <small>{{ cat_farm.size }} shop{% if cat_farm.size != 1 %}s{% endif %}</small>
    </h2>
    <div class="guide-grid">
      {% for shop in cat_farm %}{% include shop-card.html shop=shop %}{% endfor %}
    </div>
  </section>
  {% endif %}

  {% if cat_forge.size > 0 %}
  <section class="guide-section shop-section">
    <h2 class="guide-section-heading">
      <i class="fas fa-hammer" aria-hidden="true"></i>
      Forge &amp; Quarry
      <small>{{ cat_forge.size }} shop{% if cat_forge.size != 1 %}s{% endif %}</small>
    </h2>
    <div class="guide-grid">
      {% for shop in cat_forge %}{% include shop-card.html shop=shop %}{% endfor %}
    </div>
  </section>
  {% endif %}

  {% if cat_arcane.size > 0 %}
  <section class="guide-section shop-section">
    <h2 class="guide-section-heading">
      <i class="fas fa-wand-sparkles" aria-hidden="true"></i>
      Arcane &amp; Apothecary
      <small>{{ cat_arcane.size }} shop{% if cat_arcane.size != 1 %}s{% endif %}</small>
    </h2>
    <div class="guide-grid">
      {% for shop in cat_arcane %}{% include shop-card.html shop=shop %}{% endfor %}
    </div>
  </section>
  {% endif %}

  {% if cat_market.size > 0 %}
  <section class="guide-section shop-section">
    <h2 class="guide-section-heading">
      <i class="fas fa-scale-balanced" aria-hidden="true"></i>
      Market &amp; Hospitality
      <small>{{ cat_market.size }} shop{% if cat_market.size != 1 %}s{% endif %}</small>
    </h2>
    <div class="guide-grid">
      {% for shop in cat_market %}{% include shop-card.html shop=shop %}{% endfor %}
    </div>
  </section>
  {% endif %}
</section>