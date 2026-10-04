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

    (function initShopPage() {
        const pageContent = document.querySelector('.page-content.shop-page');
        if (!pageContent) return;

        const tables = pageContent.querySelectorAll('table');
        if (!tables.length) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'shop-search-wrapper';

        const input = document.createElement('input');
        input.type = 'search';
        input.className = 'filter-input shop-search';
        input.placeholder = 'Search items by name or ID...';
        input.setAttribute('aria-label', 'Search shop items');
        input.setAttribute('autocomplete', 'off');
        input.setAttribute('autocapitalize', 'off');
        input.setAttribute('spellcheck', 'false');

        const empty = document.createElement('p');
        empty.className = 'filter-empty';
        empty.hidden = true;
        empty.textContent = 'No items match that search.';

        wrapper.appendChild(input);
        wrapper.appendChild(empty);

        tables[0].parentNode.insertBefore(wrapper, tables[0]);

        const rowIndex = [];
        tables.forEach((table) => {
            table.querySelectorAll('tbody tr').forEach((row) => {
                let haystack = row.textContent;
                if (row.dataset.itemId) haystack += ' ' + row.dataset.itemId;
                if (row.dataset.aliases) haystack += ' ' + row.dataset.aliases;
                rowIndex.push({ row, table, haystack: normalize(haystack) });
            });
        });

        input.addEventListener('input', () => {
            const q = normalize(input.value.trim());
            const visibleTables = new Set();

            rowIndex.forEach(({ row, table, haystack }) => {
                const match = q === '' || haystack.includes(q);
                row.hidden = !match;
                if (match) visibleTables.add(table);
            });

            tables.forEach((table) => {
                table.hidden = q !== '' && !visibleTables.has(table);
            });

            empty.hidden = q === '' || visibleTables.size > 0;
        });
    })();

    (function initIndexPage() {
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
            'color:var(--text-muted);font-style:italic;font-size:.75rem;}'
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

                if (input.value.trim() !== '') filterByIndex();
            })
            .catch(() => { /* keep the card-text fallback */ });
    })();

});