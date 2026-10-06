# Contributing to the JeriCraft Documentation

Contributions help keep our guides, commands, rules, shops, and community information accurate and useful for all players.

This repository powers the Jekyll-based GitHub Pages site at [jericraft.net][jericraft_website]. Whether you want to fix a typo, update a command list, add a shop page, or write a brand-new guide, following these guidelines ensures a smooth and collaborative process.

All contributions are governed by our [Code of Conduct][code_of_conduct]. By participating, you agree to follow it.

---

## How to Contribute

### Issues and Suggestions

* **Check First:** Before creating a new issue, search the [Issues Section][issues_section] to see if your concern, correction, or suggestion has already been reported.
* **Create an Issue:** If it's new, please use one of our issue templates to ensure we have all the necessary information. A template will automatically be applied when you click "New Issue".
  * **Bug Report:** For reporting bugs, glitches, or technical issues with the server or website.
  * **Server Suggestions:** For proposing new features, improvements, or changes to the JeriCraft server.
* **Include Details:** When filling out the template, be as detailed as possible. Include the page URL (for example, `_guides/getting-started/` or `_shops/alchemist.md`) and any relevant context.
* **Blank Issues:** If your issue does not fit any of the templates above, you can still create a blank issue.

### Reporting a Security Issue

**Do not open a public issue for security problems.**

If you discover a vulnerability, exposed credential, or anything that could put players or the site at risk, use the private [Report a vulnerability][security_advisory] flow on the Security tab. This includes (but is not limited to) leaked API keys, tokens, or IP addresses, and any issue that could compromise the site or the game server.

For non-security bugs, continue to use the [Issues Section][issues_section] as normal.

### Labels

Issue labels help maintainers organize and prioritize work. Some labels are applied automatically by the issue templates, but you may also see or request others. Below is a quick reference for the labels most relevant to contributors:

| Label                                       | Meaning                                                           |
| ------------------------------------------- | ----------------------------------------------------------------- |
| ![Bug][label_bug]                           | Something isn't working as expected.                              |
| ![Needs Triage][label_needs_triage]         | Awaiting initial review and categorization by a maintainer.       |
| ![Suggestion][label_suggestion]             | Proposed improvement or new feature for the server.               |
| ![Complaint][label_complaint]               | Reported complaint about behavior or concerns.                    |
| ![Report][label_report]                     | Report of a player's inappropriate behavior.                      |
| ![Website][label_website]                   | Issue related to the jericraft.net documentation site.            |
| ![documentation][label_documentation]       | Improvements or additions to documentation.                       |
| ![enhancement][label_enhancement]           | New feature or request.                                           |
| ![On Hold][label_on_hold]                   | Paused pending more information or a decision.                    |
| ![question][label_question]                 | Further information is requested.                                 |
| ![help wanted][label_help_wanted]           | Extra attention is needed - maintainers would welcome assistance. |
| ![good first issue][label_good_first_issue] | Good for newcomers looking for a place to start.                  |
| ![duplicate][label_duplicate]               | This issue or pull request already exists.                        |
| ![invalid][label_invalid]                   | This doesn't seem right.                                          |
| ![wontfix][label_wontfix]                   | This will not be worked on.                                       |

You generally do not need to set labels yourself when opening an issue - a maintainer or the template will handle that. If you believe a label is missing or incorrect, leave a comment and a maintainer will review it.

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

1. Install Ruby and Bundler (see the [Jekyll documentation][jekyll_documentation] for your platform).
2. Clone your fork of the repository.
3. Run `bundle install` to install dependencies.
4. Run `bundle exec jekyll serve --livereload` to start the local server.
5. Open `http://localhost:4000` in your browser to view the site.

If you cannot run the site locally, that is okay. A maintainer will verify your changes after you submit a pull request.

---

## Communication

### Where to Ask

- **JeriCraft Discord** - the main community for the server itself. Ask gameplay, guide, or shop-related questions in `#contributing`. The `#website-git-feed` channel posts automated notifications for commits, pushes, and pull requests.
- **Chalwk's Code & Chill Discord** - the broader developer community for all my projects. Ask about Jekyll, GitHub, pull requests, or general development topics here.

| Community             | Invite                        |
| --------------------- | ----------------------------- |
| JeriCraft             | https://discord.gg/3HkQ4cGVnS |
| Chalwk's Code & Chill | https://discord.gg/VAEb4FXU5  |

### Collaboration Etiquette

* **Be Respectful**: Communicate kindly with contributors and JeriCraft maintainers.
* **Respond Promptly**: Address comments or questions on your PRs in a timely manner.
* **Open to Feedback**: Accept constructive feedback and make improvements as needed.
* **Keep it on topic**: Post questions in the most relevant channel or Discord so they reach the right people.

---

## License

By contributing to the JeriCraft documentation, you agree that your contributions will be licensed under the proprietary terms of the repository and that you grant Jericho Crosby (Chalwk) the right to relicense your contributions under any license terms, including the proprietary terms of the [LICENSE][license] file.

---

[code_of_conduct]: CODE_OF_CONDUCT.md
[issues_section]: https://github.com/Chalwk/JeriCraft/issues
[jekyll_documentation]: https://jekyllrb.com/docs/installation/
[jericraft_website]: https://jericraft.net
[label_bug]: https://img.shields.io/github/labels/Chalwk/JeriCraft/Bug?color=D73A4A
[label_complaint]: https://img.shields.io/github/labels/Chalwk/JeriCraft/Complaint?color=B60205
[label_documentation]: https://img.shields.io/github/labels/Chalwk/JeriCraft/documentation?color=0075ca
[label_duplicate]: https://img.shields.io/github/labels/Chalwk/JeriCraft/duplicate?color=cfd3d7
[label_enhancement]: https://img.shields.io/github/labels/Chalwk/JeriCraft/enhancement?color=a2eeef
[label_good_first_issue]: https://img.shields.io/github/labels/Chalwk/JeriCraft/good%20first%20issue?color=7057ff
[label_help_wanted]: https://img.shields.io/github/labels/Chalwk/JeriCraft/help%20wanted?color=008672
[label_invalid]: https://img.shields.io/github/labels/Chalwk/JeriCraft/invalid?color=e4e669
[label_needs_triage]: https://img.shields.io/github/labels/Chalwk/JeriCraft/Needs%20Triage?color=FBCA04
[label_on_hold]: https://img.shields.io/github/labels/Chalwk/JeriCraft/On%20Hold?color=FBCA04
[label_question]: https://img.shields.io/github/labels/Chalwk/JeriCraft/question?color=d876e3
[label_report]: https://img.shields.io/github/labels/Chalwk/JeriCraft/Report?color=E11D21
[label_suggestion]: https://img.shields.io/github/labels/Chalwk/JeriCraft/Suggestion?color=0E8A16
[label_website]: https://img.shields.io/github/labels/Chalwk/JeriCraft/Website?color=0075CA
[label_wontfix]: https://img.shields.io/github/labels/Chalwk/JeriCraft/wontfix?color=ffffff
[license]: LICENSE
[markdown_guide]: https://chalwk.github.io/blog/2026/04/07/markdown-tutorial/
[repo]: https://github.com/Chalwk/JeriCraft
[security_advisory]: https://github.com/Chalwk/JeriCraft/security/advisories/new