---
layout: default
title: 简约导航
---

# 欢迎来到简约导航

<div class="nav-container">
  {% for link in site.data.links %}
  <a class="nav-item" href="{{ link.url }}" target="_blank">
    <img src="{{ link.icon }}" style="width: {{ link.icon_size }}; height: {{ link.icon_size }};" alt="{{ link.name }}">
    <span>{{ link.name }}</span>
  </a>
  {% endfor %}
</div>

<link rel="stylesheet" href="assets/style.css">
