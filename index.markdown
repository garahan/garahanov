---
layout: home
author_profile: true
excerpt: "Master's candidate at Waseda University. Technical Expert at Apple Japan. Bridging engineering, econometrics, and global leadership."
header:
  overlay_image: /assets/images/Garahanov.jpeg
  overlay_filter: 0.3
---

<div class="feature-row-wrapper">
  <div class="feature-grid">

    <div class="feature-card">
      <h3>Research</h3>
      <p>Econometric modeling and large-scale data analysis for policy prediction using Python and Stata. Focus on bridging engineering and social science.</p>
    </div>

    <div class="feature-card">
      <h3>Industry</h3>
      <p>Technical Expert at Apple Japan. Leading team performance analysis and mentoring in a multilingual, multicultural environment.</p>
    </div>

    <div class="feature-card">
      <h3>Languages</h3>
      <p>Japanese (JLPT N1), English (TOEIC 960 / TOEFL iBT 113), Russian (Level 1). Currently pursuing CFA Level I.</p>
    </div>

  </div>
</div>

## Latest Posts

<div class="latest-posts">
{% for post in site.posts limit:3 %}
  <article class="post-preview">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p class="post-date">{{ post.date | date: "%Y-%m-%d" }}</p>
    {% if post.excerpt %}
    <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    {% endif %}
  </article>
{% endfor %}
</div>

<p><a href="/year-archive/" class="view-all">View all posts →</a></p>
