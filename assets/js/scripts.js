/* Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. */

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle button');
    const mainNav = document.querySelector('.main-nav');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Storage can throw (blocked cookies, some private modes). Never let it break the page.
    const store = {
        get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
        set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
    };

    /* ---------- Mobile nav toggle ---------- */
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('show');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close nav when a link inside it is clicked (mobile UX).
        // Skip dropdown toggles, which are buttons, not links.
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth > 900) return;
                if (link.closest('.dropdown-toggle')) return;
                mainNav.classList.remove('show');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ---------- Dropdowns ---------- */
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            const canHover = window.matchMedia('(hover: hover)').matches && window.innerWidth > 900;
            if (canHover) {
                e.preventDefault();
                return;
            }
            e.preventDefault();
            const parentLi = this.closest('.dropdown');
            if (!parentLi) return;

            const willOpen = !parentLi.classList.contains('open');

            document.querySelectorAll('.dropdown.open').forEach(drop => {
                if (drop !== parentLi) {
                    drop.classList.remove('open');
                    drop.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
                }
            });

            parentLi.classList.toggle('open', willOpen);
            this.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        });
    });

    // Close open dropdowns and mobile nav on outside click
    document.addEventListener('click', function (e) {
        const clickedInsideNav = e.target.closest('.main-nav');
        const clickedNavToggle = e.target.closest('.nav-toggle');

        if (mainNav && mainNav.classList.contains('show') && !clickedInsideNav && !clickedNavToggle) {
            mainNav.classList.remove('show');
            navToggle?.setAttribute('aria-expanded', 'false');
        }

        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown.open').forEach(d => {
                d.classList.remove('open');
                d.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
            });
        }
    });

    // Close open dropdowns and nav on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
        if (mainNav && mainNav.classList.contains('show') && navToggle) {
            mainNav.classList.remove('show');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }
        document.querySelectorAll('.dropdown.open').forEach(d => {
            d.classList.remove('open');
            d.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
        });
    });

    // Close dropdown menu after clicking a link inside it
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', function () {
            const dropdown = this.closest('.dropdown');
            dropdown?.classList.remove('open');
            dropdown?.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
        });
    });

    /* ---------- Reset dropdowns on resize up ---------- */
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            document.querySelectorAll('.dropdown.open').forEach(drop => {
                drop.classList.remove('open');
                drop.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
            });
        }
    });

    /* ---------- Smooth scroll with header offset ---------- */
    const header = document.querySelector('.header');
    if (header) {
        const updateScrollPadding = () => {
            document.documentElement.style.scrollPaddingTop = header.offsetHeight + 'px';
        };
        updateScrollPadding();

        if (typeof ResizeObserver !== 'undefined') {
            new ResizeObserver(updateScrollPadding).observe(header);
        } else {
            window.addEventListener('resize', updateScrollPadding);
        }

        if (!prefersReducedMotion) {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const id = this.getAttribute('href');
                    if (!id || id === '#') return;
                    const target = document.querySelector(id);
                    if (!target) return;
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    history.replaceState(null, '', id);
                });
            });
        }
    }

    /* ---------- Skip-link target ---------- */
    const main = document.querySelector('main');
    if (main && !main.id) main.id = 'main-content';
    if (main) main.setAttribute('tabindex', '-1');

    /* ---------- Copy helpers ---------- */
    async function copyText(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            try {
                const ta = document.createElement('textarea');
                ta.value = text;
                ta.setAttribute('readonly', '');
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                const ok = document.execCommand('copy');
                ta.remove();
                return ok;
            } catch (e) {
                return false;
            }
        }
    }

    // Any element with data-copy copies that text (server IP boxes)
    document.querySelectorAll('[data-copy]').forEach(btn => {
        const hint = btn.querySelector('.join-box-hint, .footer-ip-text');
        const original = hint ? hint.textContent : '';
        let timer;
        btn.addEventListener('click', async () => {
            const ok = await copyText(btn.dataset.copy);
            if (hint) {
                hint.textContent = ok ? 'Copied!' : 'Copy failed';
                clearTimeout(timer);
                timer = setTimeout(() => (hint.textContent = original), 1600);
            }
        });
    });

    // Inline command snippets starting with "/" are click-to-copy
    document.querySelectorAll('.page-content code').forEach(code => {
        const text = code.textContent.trim();
        if (!text.startsWith('/') || code.closest('pre')) return;
        code.classList.add('copyable');
        code.tabIndex = 0;
        code.setAttribute('role', 'button');
        code.title = 'Click to copy';
        const run = async () => {
            if (await copyText(text)) {
                code.classList.add('copied');
                setTimeout(() => code.classList.remove('copied'), 900);
            }
        };
        code.addEventListener('click', run);
        code.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); run(); }
        });
    });

    /* ---------- Collapsible permission columns on commands tables ---------- */
    document.querySelectorAll('.page-content table').forEach((table, idx) => {
        const headers = table.querySelectorAll('thead th');
        const lastHeader = headers[headers.length - 1];
        if (!lastHeader || !/permission/i.test(lastHeader.textContent.trim())) return;

        table.classList.add('perms-collapsible');

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'perms-toggle';

        // Per-table storage key so different tables remember independently.
        const key = 'perms-hidden:' + (table.id || table.closest('section')?.id || 'table-' + idx);

        const applyState = (hidden) => {
            table.classList.toggle('perms-hidden', hidden);
            btn.setAttribute('aria-pressed', hidden ? 'true' : 'false');
            btn.innerHTML = hidden
                ? '<i class="fas fa-eye" aria-hidden="true"></i> Show permission nodes'
                : '<i class="fas fa-eye-slash" aria-hidden="true"></i> Hide permission nodes';
        };

        // Restore saved preference (default: hidden).
        const stored = store.get(key);
        applyState(stored === null ? true : stored === '1');

        btn.addEventListener('click', () => {
            const nowHidden = !table.classList.contains('perms-hidden');
            applyState(nowHidden);
            store.set(key, nowHidden ? '1' : '0');
        });

        table.parentNode.insertBefore(btn, table);
    });

    /* ---------- Live filter (guides, commands) ---------- */
    document.querySelectorAll('input[data-filter-items]').forEach(input => {
        const selector = input.dataset.filterItems;
        const emptyMsg = input.dataset.filterEmpty ? document.querySelector(input.dataset.filterEmpty) : null;

        const apply = () => {
            const q = input.value.trim().toLowerCase();
            const items = document.querySelectorAll(selector);
            items.forEach(el => { el.hidden = q !== '' && !el.textContent.toLowerCase().includes(q); });

            // Hide tables (and their heading) when every row is filtered out
            document.querySelectorAll('.tab-content table').forEach(table => {
                const rows = table.querySelectorAll('tbody tr');
                const hide = q !== '' && rows.length > 0 && Array.from(rows).every(r => r.hidden);
                table.hidden = hide;
                const prev = table.previousElementSibling;
                if (prev && /^H[1-6]$/.test(prev.tagName)) prev.hidden = hide;
            });

            if (emptyMsg) {
                const inScope = Array.from(items).filter(el => {
                    const panel = el.closest('.tab-content');
                    return !panel || panel.classList.contains('active');
                });
                emptyMsg.hidden = q === '' || inScope.some(el => !el.hidden);
            }
        };

        input.addEventListener('input', apply);
        document.addEventListener('tabchange', apply);
    });

    /* ---------- Live server status ---------- */
    const statusEl = document.getElementById('server-status');
    if (statusEl) {
        const host = statusEl.dataset.serverHost;
        const cacheKey = 'server-status:' + host;
        const cacheTtl = 5 * 60 * 1000;

        const render = d => {
            const text = statusEl.querySelector('.status-text');
            if (!text) return;
            const online = !!(d && d.online);
            statusEl.classList.toggle('online', online);
            statusEl.classList.toggle('offline', !online);
            text.textContent = online
                ? `${d.players && d.players.online != null ? d.players.online : 0}/${d.players && d.players.max != null ? d.players.max : '?'} online` +
                (d.version ? ` \u00b7 ${d.version}` : '')
                : 'Server offline';
            statusEl.hidden = false;
        };

        let cached = null;
        try {
            const raw = sessionStorage.getItem(cacheKey);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Date.now() - parsed.t < cacheTtl) cached = parsed.d;
            }
        } catch (e) { /* ignore */ }

        const fetchStatus = () => {
            const ctrl = new AbortController();
            const timer = setTimeout(() => ctrl.abort(), 5000);
            return fetch('https://api.mcsrvstat.us/3/' + encodeURIComponent(host), { signal: ctrl.signal })
                .then(r => (r.ok ? r.json() : Promise.reject(new Error('Bad status'))))
                .then(d => {
                    const slim = {
                        online: !!d.online,
                        players: d.players ? { online: d.players.online, max: d.players.max } : null,
                        version: d.version
                    };
                    render(slim);
                    try { sessionStorage.setItem(cacheKey, JSON.stringify({ t: Date.now(), d: slim })); } catch (e) { /* ignore */ }
                })
                .catch(() => { /* leave hidden if the API is slow or unreachable */ })
                .finally(() => clearTimeout(timer));
        };

        if (cached) {
            render(cached);
        } else {
            fetchStatus();
        }

        // Refresh on tab focus if the cache is stale
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState !== 'visible') return;
            let stale = true;
            try {
                const raw = sessionStorage.getItem(cacheKey);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    stale = Date.now() - parsed.t > cacheTtl;
                }
            } catch (e) { /* ignore */ }
            if (stale) fetchStatus();
        });
    }

    /* ---------- Back to top ---------- */
    const toTop = document.createElement('button');
    toTop.type = 'button';
    toTop.className = 'back-to-top';
    toTop.setAttribute('aria-label', 'Back to top');
    toTop.innerHTML = '<i class="fas fa-chevron-up" aria-hidden="true"></i>';
    toTop.hidden = true;
    document.body.appendChild(toTop);

    let ticking = false;
    const updateToTop = () => {
        const visible = window.scrollY >= 600 && window.innerWidth > 600;
        toTop.hidden = !visible;
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(updateToTop);
    }, { passive: true });

    window.addEventListener('resize', updateToTop);

    toTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });

    updateToTop();
});

/* ---------- Share helper (exposed globally) ---------- */
window.shareOn = function (platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);

    switch (platform) {
        case 'discord':
            alert('Share this link on Discord: ' + window.location.href);
            return;
        case 'email':
            window.location.href = `mailto:?subject=${title}&body=${url}`;
            return;
        default:
            return;
    }
};