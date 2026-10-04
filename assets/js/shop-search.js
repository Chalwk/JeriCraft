/* Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. */

document.addEventListener('DOMContentLoaded', function () {
    const normalize = (s) => String(s == null ? '' : s)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '');

    const decode = (s) => {
        const el = document.createElement('textarea');
        el.innerHTML = String(s == null ? '' : s);
        return el.value;
    };

    const parsePrice = (text) => {
        const cleaned = String(text || '').replace(/[^0-9.]/g, '');
        if (!cleaned) return null;
        const n = parseFloat(cleaned);
        return isNaN(n) ? null : n;
    };

    const formatPrice = (n) => {
        if (n == null || isNaN(n)) return '\u2014';
        return '$' + n.toLocaleString('en-US');
    };

    const fallbackCopy = (text) => {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.top = '0';
        ta.style.left = '0';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) { /* noop */ }
        document.body.removeChild(ta);
    };

    const copyText = (text) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
        }
        fallbackCopy(text);
        return Promise.resolve();
    };

    const injectShopPageStyles = () => {
        if (document.getElementById('shop-page-styles')) return;
        const style = document.createElement('style');
        style.id = 'shop-page-styles';
        style.textContent = [
            '.shop-page .back-link{display:inline-flex;align-items:center;gap:.4rem;',
            'margin:0 0 1rem;color:var(--text-muted);text-decoration:none;font-size:.9rem;',
            'transition:color .15s ease;}',
            '.shop-page .back-link:hover{color:var(--accent-2);}',

            '.shop-header{display:grid;grid-template-columns:minmax(160px,240px) 1fr;',
            'gap:2rem;align-items:center;padding:1.75rem;margin:.5rem 0 2rem;',
            'background:linear-gradient(135deg,rgba(211,162,86,.08),rgba(211,162,86,0) 60%),',
            'rgba(0,0,0,.18);border:1px solid var(--border-soft);border-radius:14px;',
            'box-shadow:0 10px 30px rgba(0,0,0,.2);}',
            '.shop-header-media img{display:block;width:100%;height:auto;',
            'image-rendering:pixelated;border-radius:10px;',
            'border:1px solid var(--border-soft);background:rgba(0,0,0,.25);}',
            '.shop-header-eyebrow{margin:0 0 .35rem;font-size:.72rem;letter-spacing:.14em;',
            'text-transform:uppercase;color:var(--accent-2);font-weight:600;',
            'display:inline-flex;align-items:center;gap:.5rem;}',
            '.shop-header-info h1{margin:0 0 .5rem;font-size:clamp(1.6rem,2.6vw,2.2rem);',
            'line-height:1.15;}',
            '.shop-header-owner{margin:0 0 1rem;color:var(--text-muted);font-size:.95rem;}',
            '.shop-header-owner strong{color:inherit;font-weight:600;}',
            '.shop-header-actions{display:flex;flex-wrap:wrap;gap:.75rem;margin-bottom:1.25rem;}',
            '.shop-warp{display:inline-flex;align-items:center;gap:.55rem;',
            'padding:.55rem .95rem;border:1px solid var(--border-soft);border-radius:999px;',
            'background:rgba(0,0,0,.28);color:inherit;font:inherit;font-size:.9rem;',
            'cursor:pointer;transition:border-color .15s ease,background .15s ease,transform .12s ease;}',
            '.shop-warp:hover{border-color:var(--accent-2);background:rgba(211,162,86,.14);}',
            '.shop-warp:active{transform:scale(.985);}',
            '.shop-warp:focus-visible{outline:2px solid var(--accent-2);outline-offset:2px;}',
            '.shop-warp code{background:transparent;padding:0;font-size:.85rem;}',
            '.shop-warp-hint{color:var(--text-muted);font-size:.72rem;padding-left:.6rem;',
            'border-left:1px solid var(--border-soft);}',

            '.shop-stats{display:flex;flex-wrap:wrap;gap:1.75rem;margin:0;padding:0;list-style:none;}',
            '.shop-stats li{display:flex;flex-direction:column;min-width:74px;}',
            '.shop-stats li span{font-size:1.2rem;font-weight:700;line-height:1.2;color:inherit;}',
            '.shop-stats li small{margin-top:.15rem;font-size:.7rem;letter-spacing:.09em;',
            'text-transform:uppercase;color:var(--text-muted);}',

            '.shop-toolbar{display:flex;flex-wrap:wrap;gap:.75rem;align-items:center;',
            'margin:0 0 1rem;padding:.6rem .75rem;border:1px solid var(--border-soft);',
            'border-radius:12px;background:rgba(0,0,0,.18);}',
            '.shop-toolbar-search{position:relative;flex:1 1 240px;display:flex;align-items:center;}',
            '.shop-toolbar-search i{position:absolute;left:.85rem;color:var(--text-muted);',
            'font-size:.85rem;pointer-events:none;}',
            '.shop-toolbar-search .filter-input{width:100%;padding-left:2.2rem;margin:0;}',
            '.shop-toolbar-sort{flex:0 0 auto;}',
            '.shop-sort{padding:.5rem .8rem;border-radius:10px;border:1px solid var(--border-soft);',
            'background:rgba(0,0,0,.28);color:inherit;font:inherit;font-size:.85rem;cursor:pointer;}',
            '.shop-sort:focus-visible{outline:2px solid var(--accent-2);outline-offset:2px;}',

            '.shop-table-wrap{overflow-x:auto;border:1px solid var(--border-soft);',
            'border-radius:12px;background:rgba(0,0,0,.16);}',
            '.shop-page table{width:100%;border-collapse:collapse;margin:0;font-size:.92rem;}',
            '.shop-page thead th{position:sticky;top:0;z-index:1;background:rgba(0,0,0,.42);',
            'backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);text-align:left;',
            'padding:.75rem 1rem;font-size:.72rem;letter-spacing:.09em;text-transform:uppercase;',
            'color:var(--text-muted);border-bottom:1px solid var(--border-soft);white-space:nowrap;}',
            '.shop-page tbody td{padding:.8rem 1rem;border-bottom:1px solid rgba(255,255,255,.06);',
            'vertical-align:top;}',
            '.shop-page tbody tr:last-child td{border-bottom:0;}',
            '.shop-page tbody tr{transition:background .12s ease;}',
            '.shop-page tbody tr:hover{background:rgba(211,162,86,.07);}',
            '.shop-page tbody tr[hidden]{display:none;}',
            '.shop-page tbody td:first-child{font-weight:600;color:inherit;white-space:nowrap;}',
            '.shop-price-cell{white-space:nowrap;}',
            '.shop-price{display:inline-block;padding:.22rem .7rem;',
            'background:rgba(211,162,86,.15);border:1px solid var(--border-soft);',
            'border-radius:999px;font-weight:600;font-size:.83rem;color:var(--accent-2);',
            'white-space:nowrap;}',
            '.shop-lore{color:var(--text-muted);font-size:.85rem;line-height:1.55;max-width:56ch;}',
            '.shop-lore-line{display:block;}',
            '.shop-lore-line + .shop-lore-line{margin-top:.18rem;}',
            '.shop-lore-line.is-qty{color:inherit;}',
            '.shop-lore-line.is-effect{color:var(--accent-2);font-weight:500;}',
            '.shop-empty{margin-top:1rem;}',
            '.shop-page .visually-hidden{position:absolute;width:1px;height:1px;padding:0;',
            'margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}',

            '@media (max-width:720px){',
            '.shop-header{grid-template-columns:1fr;padding:1.25rem;gap:1.25rem;}',
            '.shop-header-media img{max-width:180px;}',
            '.shop-stats{gap:1rem 1.25rem;}',
            '.shop-page thead th{position:static;}',
            '}'
        ].join('');
        document.head.appendChild(style);
    };

    const initShopPage = () => {
        const pageContent = document.querySelector('.page-content.shop-page');
        if (!pageContent) return;

        const table = pageContent.querySelector('table');
        if (!table) return;

        injectShopPageStyles();

        const tbody = table.querySelector('tbody') || table;
        const rows = Array.from(tbody.querySelectorAll('tr'));
        if (!rows.length) return;

        let minPrice = null;
        let maxPrice = null;

        const classifyLoreLine = (text) => {
            const t = String(text || '').trim();
            if (/^(quantity|contents?|capacity|quality|uses|arrows?|bundle size|bouquet size|material|type|style|effect\s+level|brightness|durability|size)\s*:/i.test(t)) {
                return 'is-qty';
            }
            if (/^(effect|grants|special|warning|use|style|note)\s*:/i.test(t)) {
                return 'is-effect';
            }
            if (/^(effect|grants)\b/i.test(t)) return 'is-effect';
            return '';
        };

        rows.forEach((row, index) => {
            const cells = Array.from(row.children);
            if (!cells.length) return;

            const nameCell = cells[0];
            const itemName = nameCell.textContent.replace(/\s+/g, ' ').trim();
            row.dataset.itemName = itemName;
            row.dataset.originalIndex = String(index);

            const hasLore = cells.length >= 3;
            const loreCell = hasLore ? cells[cells.length - 1] : null;
            const priceCells = cells.slice(1, hasLore ? cells.length - 1 : cells.length);

            let buyPrice = null;

            priceCells.forEach((cell) => {
                const raw = cell.textContent.trim();
                if (!raw || !raw.includes('$')) return;
                const val = parsePrice(raw);
                if (val == null) return;

                if (buyPrice == null) buyPrice = val;
                if (minPrice == null || val < minPrice) minPrice = val;
                if (maxPrice == null || val > maxPrice) maxPrice = val;

                cell.classList.add('shop-price-cell');
                cell.textContent = '';
                const badge = document.createElement('span');
                badge.className = 'shop-price';
                badge.textContent = raw;
                cell.appendChild(badge);
            });

            row.dataset.price = buyPrice != null ? String(buyPrice) : '';

            if (loreCell) {
                const html = loreCell.innerHTML;
                const parts = html.split(/<br\s*\/?>/i);
                loreCell.textContent = '';
                loreCell.classList.add('shop-lore');

                parts.forEach((part) => {
                    const trimmed = part.trim();
                    if (!trimmed) return;
                    const span = document.createElement('span');
                    span.className = 'shop-lore-line';
                    span.innerHTML = trimmed;
                    const cls = classifyLoreLine(span.textContent);
                    if (cls) span.classList.add(cls);
                    loreCell.appendChild(span);
                });
            }
        });

        const countStat = pageContent.querySelector('[data-shop-stat="count"]');
        const minStat = pageContent.querySelector('[data-shop-stat="min"]');
        const maxStat = pageContent.querySelector('[data-shop-stat="max"]');
        if (countStat) countStat.textContent = String(rows.length);
        if (minStat) minStat.textContent = formatPrice(minPrice);
        if (maxStat) maxStat.textContent = formatPrice(maxPrice);

        const warpBtn = pageContent.querySelector('.shop-warp');
        if (warpBtn) {
            const hint = warpBtn.querySelector('.shop-warp-hint');
            const originalHint = hint ? hint.textContent : '';
            warpBtn.addEventListener('click', () => {
                const text = warpBtn.dataset.copy || '';
                copyText(text).then(() => {
                    if (!hint) return;
                    hint.textContent = 'Copied!';
                    window.setTimeout(() => {
                        hint.textContent = originalHint;
                    }, 1600);
                });
            });
        }

        const toolbar = document.createElement('div');
        toolbar.className = 'shop-toolbar';

        const searchWrap = document.createElement('div');
        searchWrap.className = 'shop-toolbar-search';
        const searchIcon = document.createElement('i');
        searchIcon.className = 'fas fa-magnifying-glass';
        searchIcon.setAttribute('aria-hidden', 'true');
        const input = document.createElement('input');
        input.type = 'search';
        input.className = 'filter-input shop-search';
        input.placeholder = 'Search items by name, effect, or keyword...';
        input.setAttribute('aria-label', 'Search shop items');
        input.setAttribute('autocomplete', 'off');
        input.setAttribute('autocapitalize', 'off');
        input.setAttribute('spellcheck', 'false');
        searchWrap.appendChild(searchIcon);
        searchWrap.appendChild(input);

        const sortWrap = document.createElement('div');
        sortWrap.className = 'shop-toolbar-sort';
        const sortId = 'shop-sort-' + Math.random().toString(36).slice(2, 8);
        const sortLabel = document.createElement('label');
        sortLabel.className = 'visually-hidden';
        sortLabel.htmlFor = sortId;
        sortLabel.textContent = 'Sort items';
        const sortSelect = document.createElement('select');
        sortSelect.id = sortId;
        sortSelect.className = 'shop-sort';
        [
            ['default', 'Default order'],
            ['name-asc', 'Name (A \u2192 Z)'],
            ['name-desc', 'Name (Z \u2192 A)'],
            ['price-asc', 'Price (low \u2192 high)'],
            ['price-desc', 'Price (high \u2192 low)']
        ].forEach(([value, label]) => {
            const opt = document.createElement('option');
            opt.value = value;
            opt.textContent = label;
            sortSelect.appendChild(opt);
        });
        sortWrap.appendChild(sortLabel);
        sortWrap.appendChild(sortSelect);

        toolbar.appendChild(searchWrap);
        toolbar.appendChild(sortWrap);

        const empty = document.createElement('p');
        empty.className = 'filter-empty shop-empty';
        empty.hidden = true;
        empty.textContent = 'No items match that search.';

        const scrollWrap = document.createElement('div');
        scrollWrap.className = 'shop-table-wrap';

        const anchor = table.parentNode;
        anchor.insertBefore(toolbar, table);
        anchor.insertBefore(empty, table);
        anchor.insertBefore(scrollWrap, table);
        scrollWrap.appendChild(table);

        const applyFilter = () => {
            const q = normalize(input.value);
            let visible = 0;

            rows.forEach((row) => {
                const haystack = normalize(
                    (row.dataset.itemName || '') + ' ' + row.textContent
                );
                const match = q === '' || haystack.includes(q);
                row.hidden = !match;
                if (match) visible += 1;
            });

            empty.hidden = q === '' || visible > 0;
        };

        const applySort = () => {
            const mode = sortSelect.value;
            const sorted = rows.slice();

            const priceOf = (row) => {
                const p = parseFloat(row.dataset.price);
                return isNaN(p) ? null : p;
            };

            if (mode === 'name-asc') {
                sorted.sort((a, b) =>
                    (a.dataset.itemName || '').localeCompare(b.dataset.itemName || ''));
            } else if (mode === 'name-desc') {
                sorted.sort((a, b) =>
                    (b.dataset.itemName || '').localeCompare(a.dataset.itemName || ''));
            } else if (mode === 'price-asc') {
                sorted.sort((a, b) => {
                    const ap = priceOf(a), bp = priceOf(b);
                    if (ap == null && bp == null) return 0;
                    if (ap == null) return 1;
                    if (bp == null) return -1;
                    return ap - bp;
                });
            } else if (mode === 'price-desc') {
                sorted.sort((a, b) => {
                    const ap = priceOf(a), bp = priceOf(b);
                    if (ap == null && bp == null) return 0;
                    if (ap == null) return 1;
                    if (bp == null) return -1;
                    return bp - ap;
                });
            } else {
                sorted.sort((a, b) =>
                    parseInt(a.dataset.originalIndex, 10) -
                    parseInt(b.dataset.originalIndex, 10));
            }

            const frag = document.createDocumentFragment();
            sorted.forEach((row) => frag.appendChild(row));
            tbody.appendChild(frag);
        };

        input.addEventListener('input', applyFilter);
        sortSelect.addEventListener('change', applySort);
    };

    const initIndexPage = () => {
        const input = document.querySelector('input[data-shop-search]');
        if (!input) return;

        const endpoint = input.dataset.shopSearch;
        const emptyMsg = input.dataset.filterEmpty
            ? document.querySelector(input.dataset.filterEmpty)
            : null;

        const cards = Array.from(document.querySelectorAll('.guide-card'));
        if (!endpoint || !cards.length) return;

        const style = document.createElement('style');
        style.textContent = [
            '.shop-item-matches{margin-top:.55rem;font-size:.8rem;line-height:1.9;}',
            '.shop-item-matches strong{display:block;margin-bottom:.25rem;',
            'color:var(--accent-2);font-weight:600;}',
            '.shop-item-chip{display:inline-block;margin:0 .25rem .25rem 0;',
            'padding:.12rem .55rem;background:rgba(211,162,86,.15);',
            'border:1px solid var(--border-soft);border-radius:var(--radius-pill);',
            'color:var(--text-muted);font-size:.75rem;}',
            '.shop-item-more{display:inline-block;margin:0 .25rem .25rem 0;',
            'color:var(--text-muted);font-style:italic;font-size:.75rem;}',
            '.shop-card-count{display:inline-block;margin-left:.5rem;padding:.05rem .5rem;',
            'font-size:.7rem;font-weight:600;letter-spacing:.05em;',
            'background:rgba(211,162,86,.15);border:1px solid var(--border-soft);',
            'border-radius:var(--radius-pill);color:var(--accent-2);vertical-align:middle;}'
        ].join('');
        document.head.appendChild(style);

        const clearMatches = (card) => {
            const old = card.querySelector('.shop-item-matches');
            if (old) old.remove();
        };

        const renderMatches = (card, items) => {
            clearMatches(card);
            if (!items || !items.length) return;

            const host = card.querySelector('div');
            if (!host) return;

            const box = document.createElement('div');
            box.className = 'shop-item-matches';

            const label = document.createElement('strong');
            label.textContent = 'Matched items:';
            box.appendChild(label);

            const shown = items.slice(0, 8);
            shown.forEach((name) => {
                const chip = document.createElement('span');
                chip.className = 'shop-item-chip';
                chip.textContent = name;
                box.appendChild(chip);
            });

            if (items.length > shown.length) {
                const more = document.createElement('span');
                more.className = 'shop-item-more';
                more.textContent = '+' + (items.length - shown.length) + ' more';
                box.appendChild(more);
            }

            host.appendChild(box);
        };

        const filterByCardText = () => {
            const q = input.value.trim().toLowerCase();
            let visible = 0;

            cards.forEach((card) => {
                const match = q === '' || card.textContent.toLowerCase().includes(q);
                card.hidden = !match;
                clearMatches(card);
                if (match) visible += 1;
            });

            if (emptyMsg) emptyMsg.hidden = q === '' || visible > 0;
        };

        let index = null;

        const filterByIndex = () => {
            const q = normalize(input.value);
            let visible = 0;

            const matched = new Map();

            if (q !== '') {
                index.forEach((shop) => {
                    const nameHit = normalize(shop.title).includes(q) ||
                        normalize(shop.description).includes(q);
                    const itemHits = shop.items.filter((it) => normalize(it).includes(q));

                    if (nameHit || itemHits.length) {
                        matched.set(shop.url, itemHits);
                    }
                });
            }

            cards.forEach((card) => {
                const href = card.getAttribute('href');
                let show = true;
                let items = null;

                if (q !== '') {
                    if (matched.has(href)) items = matched.get(href);
                    else show = false;
                }

                card.hidden = !show;
                if (show) renderMatches(card, items);
                else clearMatches(card);
                if (show) visible += 1;
            });

            if (emptyMsg) emptyMsg.hidden = q === '' || visible > 0;
        };

        input.addEventListener('input', () => {
            if (index) filterByIndex();
            else filterByCardText();
        });

        fetch(endpoint, { credentials: 'same-origin' })
            .then((r) => (r.ok ? r.json() : Promise.reject(new Error('bad status'))))
            .then((data) => {
                if (!Array.isArray(data)) return;

                index = data.map((shop) => ({
                    title: decode(shop.title || ''),
                    url: shop.url || '',
                    description: decode(shop.description || ''),
                    items: (shop.items || []).map((s) => decode(s))
                }));

                index.forEach((shop) => {
                    if (!shop.items.length) return;
                    const card = cards.find((c) => c.getAttribute('href') === shop.url);
                    if (!card) return;
                    const h3 = card.querySelector('h3');
                    if (!h3 || h3.querySelector('.shop-card-count')) return;
                    const badge = document.createElement('span');
                    badge.className = 'shop-card-count';
                    badge.textContent = shop.items.length + ' items';
                    h3.appendChild(badge);
                });

                if (input.value.trim() !== '') filterByIndex();
            })
            .catch(() => { /* keep the card-text fallback */ });
    };

    initShopPage();
    initIndexPage();
});