# Contributing to the JeriCraft Documentation

Contributions help keep our guides, commands, rules, shops, and community information accurate and useful for all players.

This repository powers the Jekyll-based GitHub Pages site at [jericraft.net](https://jericraft.net). Whether you want to fix a typo, update a command list, add a shop page, or write a brand-new guide, following these guidelines ensures a smooth and collaborative process.

---

## How to Contribute

### Issues and Suggestions

* **Check First**: Before creating a new issue, search the [Issues Section][issues_section] to see if your concern, correction, or suggestion has already been reported.
* **Create an Issue**: If it's new, create an issue with a **clear title** and **detailed description**. Include the page URL (for example `_guides/getting-started/` or `_shops/alchemist.md`) and any relevant context.

### Pull Requests

1. **Fork the Repository**: Create your own copy of the [JeriCraft repository][repo].
2. **Create a Branch**: Make your changes in a new branch with a descriptive name (for example `fix-factions-guide` or `add-fishing-guide`).
3. **Submit a PR**: When your changes are ready, submit a pull request with a clear explanation of your additions, changes, or corrections.
4. **Follow Style Guidelines**: Ensure your Markdown follows the existing JeriCraft conventions described below.

---

## Repository Structure

A quick overview of the folders you will most likely work in:

| Path             | Purpose                                                          |
| ---------------- | ---------------------------------------------------------------- |
| `_guides/`       | All player guides (for example `getting-started.md`, `jobs.md`). |
| `_shops/`        | All NPC shop pages (for example `blacksmith.md`, `farmer.md`).   |
| `_includes/`     | Shared content partials (commands lists, rules, footer, etc.).   |
| `_layouts/`      | Jekyll layouts. Most content uses `page`, which wraps `default`. |
| `assets/images/` | Site images (logos, shop images, tutorial screenshots).          |
| `assets/css/`    | Stylesheets.                                                     |
| `data/`          | Data files such as `bans.txt`.                                   |
| Root (`/`)       | Top-level pages like `index.html`, `about.md`, `rules.html`.     |

---

## Writing a New Guide

Guides live inside the `_guides/` folder at the root of the repository. If you want to add a brand-new guide:

* **Place your guide** inside `_guides/`. If you are unsure whether your idea belongs there, ask in the Discord `#contributing` channel or open an issue first.
* **Name the file** descriptively using lowercase letters and hyphens (for example `fishing-guide.md`). Avoid spaces, special characters, or version numbers in the filename.
* **Include YAML front matter** at the very top of your file. At a minimum, specify a `title` and a `permalink`. The `layout` is applied automatically by `_config.yml`, so you do not need to set it yourself.

A typical guide front matter block looks like this:

```yaml
---
title: Fishing Guide
permalink: /guides/fishing/
---
```

* **Add the table of contents include** directly after your copyright header if your guide is long enough to benefit from one:

```markdown
{% include toc.html %}
```

* **Write in clear Markdown**. Use headings, lists, and tables where appropriate. Keep paragraphs short and scannable.
* **Reference related pages** using `{{site.baseurl}}` so links stay correct (for example `[Factions Guide]({{site.baseurl}}/guides/factions)`).
* **Submit a pull request** as described above. A maintainer will review your submission and may request changes before merging.

---

## Adding a Shop Page

Shop pages live inside the `_shops/` folder. Each shop has its own Markdown file named after the shop (for example `blacksmith.md`). If you are adding a new shop page:

* **Place the file** inside `_shops/`.
* **Use the existing shop files** as a template. They include front matter with a `title` and `permalink` in the format `/shops/<name>/`.
* **Reference the shop image** from `assets/images/npc_shops/` using `{{ site.baseurl }}` in the `src` attribute.
* **Include a price table** matching the existing style (Item Name and Buy Price columns).

---

## Updating an Existing Page

* Locate the corresponding file for the page you want to update. For example, the Commands page is `commands.html`, and its command tables are stored in `_includes/player-commands.md` and `_includes/staff-commands.md`.
* The Rules page renders `_includes/community-rules.md`, and the About page renders `_includes/about.md`. Edit the include if you need to change the content body.
* If you are updating command lists, tables, prices, or permissions, double-check your entries against the live server or a staff member's confirmation.
* Submit a pull request with a short description of what you changed and why.

---

## Style Guidelines

### Markdown and Documentation

* Use **proper Markdown formatting** for all docs and guides.
* Keep content **clear, concise, and structured**.
* Use **tables** for command lists, prices, and rules, matching the existing style on the Commands, Shops, and Rules pages.
* Reference related guides or pages when appropriate (for example, link to the Factions guide from the Commands page).
* For a detailed guide on Markdown formatting, refer to the [Markdown Guide][markdown_guide].

### Front Matter

Every page requires YAML front matter to render properly. A typical guide front matter block looks like this:

```yaml
---
title: "Fishing Guide"
permalink: /guides/fishing/
---
```

You generally do not need to set `layout` because `_config.yml` applies the `page` layout to all guides and shops automatically. Only override it if you have a specific reason to.

### Copyright Header

Every file in this repository begins with the following comment line directly beneath the front matter. Please include it in any new files you add:

```html
<!-- Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. -->
```

### Images and Assets

* Place site images inside `assets/images/` and use the existing subfolders where they fit:
  * `assets/images/logos/` for branding and logos.
  * `assets/images/npc_shops/` for shop images.
  * `assets/images/tutorials/` for walkthrough screenshots.
  * `assets/images/advertising/` for promotional images.
* Use descriptive filenames (for example `fishing-rod-recipe.png`).
* Reference images using `{{ site.baseurl }}` so paths stay correct: `![Fishing Rod Recipe]({{ site.baseurl }}/assets/images/tutorials/fishing-rod-recipe.png)`.

### Icons

The site loads Font Awesome 6.5.0 globally. You can use icons inline, for example:

```html
<i class="fas fa-book" aria-hidden="true"></i>
```

Always include `aria-hidden="true"` on decorative icons.

---

## Testing Locally

If you want to preview your changes before submitting a pull request, you can run the site locally:

1. Install Ruby and Bundler (see the [Jekyll documentation](https://jekyllrb.com/docs/installation/) for your platform).
2. Clone your fork of the repository.
3. Run `bundle install` to install dependencies.
4. Run `bundle exec jekyll serve --livereload` to start the local server.
5. Open `http://localhost:4000` in your browser to view the site.

If you cannot run the site locally, that is okay. A maintainer will verify your changes after you submit a pull request.

---

## Communication

### Collaboration Etiquette

* **Be Respectful**: Communicate kindly with contributors and JeriCraft maintainers.
* **Respond Promptly**: Address comments or questions on your PRs in a timely manner.
* **Open to Feedback**: Accept constructive feedback and make improvements as needed.
* **Use Discord**: If you have questions, ask in the `#contributing` channel. The `#website-git-feed` channel posts automated notifications for commits, pushes, and pull requests.

---

## License

By contributing to the JeriCraft documentation, you agree that your contributions will be licensed under the same terms as the repository. For details, see the [LICENSE][license] file.

---

[repo]: https://github.com/Chalwk/JeriCraft
[issues_section]: https://github.com/Chalwk/JeriCraft/issues
[markdown_guide]: https://chalwk.github.io/blog/2026/04/07/markdown-tutorial/
[license]: LICENSE

---