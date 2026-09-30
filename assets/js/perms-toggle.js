/* Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. */

/* Collapsible "Permission Node(s)" column on command tables. */
document.addEventListener('DOMContentLoaded', function () {
    // Storage can throw (blocked cookies, some private modes). Never let it break the page.
    const store = {
        get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
        set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
    };

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
});