/* Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. */

/* Copy-to-clipboard: [data-copy] buttons and click-to-copy inline code. */
document.addEventListener('DOMContentLoaded', function () {
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
});