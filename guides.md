---
layout: default
title: Guides
description: All JeriCraft guides
permalink: /guides/
---

<!-- Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. -->

{% include guides-sorted.html %}

<h1>Guides</h1>
<p>Here you'll find all the guides to help you navigate JeriCraft. Pick a topic to get started.</p>

<input type="search" class="filter-input" placeholder="Filter guides..." aria-label="Filter guides"
       data-filter-items=".guide-card" data-filter-empty="#guide-empty">
<p class="filter-empty" id="guide-empty" hidden>No guides match that search.</p>

<div class="guide-grid">
  {% for guide in sorted_guides %}
    <a class="guide-card" href="{{ guide.url | relative_url }}">
      <span class="guide-card-icon" aria-hidden="true">
        <i class="fas {{ guide.icon | default: 'fa-book' }}"></i>
      </span>
      <div>
        <h3>{{ guide.title }}</h3>
        {% if guide.description %}
          <p>{{ guide.description }}</p>
        {% endif %}
      </div>
    </a>
  {% endfor %}
</div>
