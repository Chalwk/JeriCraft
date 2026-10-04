/* Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. */

/* Live filter for guides and commands. Hides rows, then empty sections. */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('input[data-filter-items]').forEach(input => {
        const selector = input.dataset.filterItems;
        const emptyMsg = input.dataset.filterEmpty ? document.querySelector(input.dataset.filterEmpty) : null;

        const apply = () => {
            const q = input.value.trim().toLowerCase();
            const items = document.querySelectorAll(selector);
            items.forEach(el => { el.hidden = q !== '' && !el.textContent.toLowerCase().includes(q); });

            // Hide guide sections whose cards are all filtered out.
            document.querySelectorAll('.guide-section').forEach(section => {
                const cards = section.querySelectorAll('.guide-card');
                if (!cards.length) return;
                const anyVisible = Array.from(cards).some(c => !c.hidden);
                section.hidden = q !== '' && !anyVisible;
            });

            // Hide subsections whose content no longer matches the filter.
            document.querySelectorAll('.tab-content').forEach(panel => {
                const kids = Array.from(panel.children);
                const headingHidden = new Array(kids.length).fill(false);

                // Pass 1: hide any filterable block whose items are all filtered out.
                kids.forEach(el => {
                    if (el.tagName === 'TABLE') {
                        const rows = el.querySelectorAll('tbody tr');
                        el.hidden = q !== '' && rows.length > 0 && Array.from(rows).every(r => r.hidden);
                    } else if (el.tagName === 'UL' || el.tagName === 'OL') {
                        const lis = el.querySelectorAll('li');
                        el.hidden = q !== '' && lis.length > 0 && Array.from(lis).every(li => li.hidden);
                    }
                });

                // Pass 2: walk headings bottom-up so nested sections resolve first.
                // A heading hides when it has filterable content but none of it is visible.
                for (let i = kids.length - 1; i >= 0; i--) {
                    const el = kids[i];
                    if (!/^H[1-6]$/.test(el.tagName)) continue;

                    if (q === '') {
                        el.hidden = false;
                        headingHidden[i] = false;
                        continue;
                    }

                    const level = parseInt(el.tagName[1], 10);
                    let hasFilterable = false;
                    let hasVisible = false;

                    for (let j = i + 1; j < kids.length; j++) {
                        const nx = kids[j];
                        const isHeading = /^H[1-6]$/.test(nx.tagName);

                        if (isHeading) {
                            const nxLevel = parseInt(nx.tagName[1], 10);
                            if (nxLevel <= level) break; // end of this section
                            hasFilterable = true;
                            if (!headingHidden[j]) hasVisible = true;
                            continue;
                        }

                        if (nx.tagName === 'TABLE' || nx.tagName === 'UL' || nx.tagName === 'OL') {
                            hasFilterable = true;
                            if (!nx.hidden) hasVisible = true;
                        }
                    }

                    const hide = hasFilterable && !hasVisible;
                    el.hidden = hide;
                    headingHidden[i] = hide;
                }
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
});