# Begench Garahanov — Personal Website

A Jekyll-powered personal website built with the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme.

## Live Site

**URL:** [garahanov.com](https://garahanov.com)

## Tech Stack

- **Static Site Generator:** Jekyll 4.x
- **Theme:** Minimal Mistakes 4.26.2 (contrast skin)
- **Search:** Lunr.js
- **Hosting:** GitHub Pages (or compatible static host)
- **Language:** Ruby / Liquid / Markdown / SCSS

## Local Development

```bash
# Install dependencies
bundle install

# Start the dev server
bundle exec jekyll serve

# Site will be available at http://localhost:4000
```

## Project Structure

```
├── _config.yml          # Site configuration
├── _data/               # Navigation, authors, UI text
├── _pages/              # Static pages (About, CV, Publications, Projects, etc.)
├── _posts/              # Blog posts (YYYY-MM-DD-title.markdown)
├── assets/
│   ├── css/main.scss    # Theme import + custom styles
│   └── images/          # Profile photo and images
├── 404.html             # Custom 404 page
├── Gemfile              # Ruby dependencies
└── index.markdown       # Homepage
```

## Adding Content

### New Blog Post

Create a file in `_posts/` named `YYYY-MM-DD-title.markdown`:

```markdown
---
title: "Post Title"
date: YYYY-MM-DD HH:MM:SS +0900
categories: [category1, category2]
tags: [tag1, tag2, tag3]
excerpt: "One-line summary for previews."
---

Post content here.
```

### New Page

Create a file in `_pages/` with front matter:

```markdown
---
title: "Page Title"
permalink: /page-url/
author_profile: true
---

Page content here.
```

## License

Content is © Begench Garahanov. Code structure is based on the Minimal Mistakes theme (MIT License).
