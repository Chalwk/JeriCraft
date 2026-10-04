---
layout: default
title: Guides
description: All JeriCraft guides
permalink: /guides/
---

<!-- Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. -->

{% include guides-sorted.html %}

<section class="page-hero">
  <div class="page-hero-content">
    <h1>JeriCraft Guides</h1>
    <p class="page-hero-description">
      Everything you need to thrive in the realm, from your first day on the server, to mastering factions, jobs, the medieval economy, and the changing seasons.
    </p>
    <div class="page-hero-meta">
      <span><i class="fas fa-scroll" aria-hidden="true"></i> {{ site.guides | size }} guides</span>
      <span><i class="fas fa-clock" aria-hidden="true"></i> Updated regularly</span>
      <span><i class="fas fa-comments" aria-hidden="true"></i> Ask staff if stuck</span>
    </div>
  </div>
</section>

<input type="search" class="filter-input" placeholder="Filter guides by name, topic, or keyword..."
       aria-label="Filter guides"
       data-filter-items=".guide-card" data-filter-empty="#guide-empty">
<p class="filter-empty" id="guide-empty" hidden>No guides match that search.</p>

{% assign ordered_guides = sorted_guides | where_exp: "g", "g.order" %}
{% assign cat_getting_started = ordered_guides | where_exp: "g", "g.order <= 1" %}
{% assign cat_core = ordered_guides | where_exp: "g", "g.order >= 2" | where_exp: "g", "g.order <= 5" %}
{% assign cat_world = ordered_guides | where_exp: "g", "g.order >= 6" | where_exp: "g", "g.order <= 7" %}
{% assign cat_trade = ordered_guides | where_exp: "g", "g.order >= 8" | where_exp: "g", "g.order <= 10" %}
{% assign cat_community = ordered_guides | where_exp: "g", "g.order >= 11" %}

{% if cat_getting_started.size > 0 %}
<section class="guide-section">
  <h2 class="guide-section-heading">
    <i class="fas fa-flag" aria-hidden="true"></i>
    Getting Started
    <small>{{ cat_getting_started.size }} guide{% if cat_getting_started.size != 1 %}s{% endif %}</small>
  </h2>
  <div class="guide-grid">
    {% for guide in cat_getting_started %}
      {% include guide-card.html guide=guide %}
    {% endfor %}
  </div>
</section>
{% endif %}

{% if cat_core.size > 0 %}
<section class="guide-section">
  <h2 class="guide-section-heading">
    <i class="fas fa-cogs" aria-hidden="true"></i>
    Core Systems
    <small>{{ cat_core.size }} guide{% if cat_core.size != 1 %}s{% endif %}</small>
  </h2>
  <div class="guide-grid">
    {% for guide in cat_core %}
      {% include guide-card.html guide=guide %}
    {% endfor %}
  </div>
</section>
{% endif %}

{% if cat_world.size > 0 %}
<section class="guide-section">
  <h2 class="guide-section-heading">
    <i class="fas fa-globe" aria-hidden="true"></i>
    World &amp; Gameplay
    <small>{{ cat_world.size }} guide{% if cat_world.size != 1 %}s{% endif %}</small>
  </h2>
  <div class="guide-grid">
    {% for guide in cat_world %}
      {% include guide-card.html guide=guide %}
    {% endfor %}
  </div>
</section>
{% endif %}

{% if cat_trade.size > 0 %}
<section class="guide-section">
  <h2 class="guide-section-heading">
    <i class="fas fa-coins" aria-hidden="true"></i>
    Trading &amp; Building
    <small>{{ cat_trade.size }} guide{% if cat_trade.size != 1 %}s{% endif %}</small>
  </h2>
  <div class="guide-grid">
    {% for guide in cat_trade %}
      {% include guide-card.html guide=guide %}
    {% endfor %}
  </div>
</section>
{% endif %}

{% if cat_community.size > 0 %}
<section class="guide-section">
  <h2 class="guide-section-heading">
    <i class="fas fa-users" aria-hidden="true"></i>
    Community
    <small>{{ cat_community.size }} guide{% if cat_community.size != 1 %}s{% endif %}</small>
  </h2>
  <div class="guide-grid">
    {% for guide in cat_community %}
      {% include guide-card.html guide=guide %}
    {% endfor %}
  </div>
</section>
{% endif %}