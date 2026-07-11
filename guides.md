---
layout: default
title: Guides
description: All JeriCraft guides
permalink: /guides/
---

<!-- Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. -->

<h1>📖 Guides</h1>
<p>Here you'll find all the guides to help you navigate JeriCraft.</p>

<ul>
  {% for guide in site.guides %}
    <li><a href="{{ guide.url | relative_url }}">{{ guide.title }}</a></li>
  {% endfor %}
</ul>