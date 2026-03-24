---
layout: default
title: 简约导航
---

<!-- # 欢迎来到简约导航 -->

<div class="nav-container-wrapper">
  <div class="nav-container">
    {% for link in site.data.links %}
    <a class="nav-item" href="{{ link.url }}" target="_blank" rel="noopener noreferrer">
      <img src="{{ link.icon }}" alt="{{ link.name }}" 
        width="{{ link.icon_size | replace: 'px', '' }}" 
        height="{{ link.icon_size | replace: 'px', '' }}">
      <span>{{ link.name }}</span>
    </a>
    {% endfor %}
  </div>
</div>
