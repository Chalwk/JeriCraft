# Security Policy

This repository contains the Jekyll source code for the JeriCraft documentation
site at [jericraft.net](https://jericraft.net). This document explains how to
report a vulnerability and what to expect.

## Supported Versions

Fixes are applied to the latest version on `main`.

| Version          | Supported |
| ---------------- | --------- |
| Latest on `main` | Yes       |
| Older commits    | No        |
| Forks            | No        |

## Reporting a Vulnerability

**Please do not open a public issue for security problems.**

1. **GitHub Private Vulnerability Reporting** (preferred). Use the
   [Report a vulnerability](https://github.com/Chalwk/JeriCraft/security/advisories/new)
   button on the Security tab.
2. **Email**. Email [chalwk.dev@gmail.com](mailto:chalwk.dev@gmail.com) with
   "SECURITY" in the subject line.

For in-game exploits, cheating, or player reports, contact staff through the
[Discord](https://discord.gg/NsndXgYfxQ) or the server forum instead. This
policy covers the repository and documentation site only.

### What to include

- A clear description of the issue
- Steps to reproduce
- The impact you believe it has
- Whether you've disclosed it anywhere else

## Scope

### In scope

- Vulnerabilities in the Jekyll site (dependency issues, XSS in templates,
  unsafe includes)
- Leaked secrets, tokens, or API keys in the source or build files
- Broken links that redirect to malicious content
- Content injection through pull requests

### Out of scope

- In-game exploits, cheating, or player behaviour (contact staff)
- Server uptime or performance
- Typos or content corrections (open a regular issue)
- Findings from automated scanners with no demonstrated impact

## What to expect

- **Acknowledgement:** within 7 days
- **Initial assessment:** within 14 days
- **Fix:** usually within 30 days for confirmed issues
- **Public disclosure:** coordinated with you

## Automated security

- Dependabot alerts and security updates
- Secret scanning with push protection