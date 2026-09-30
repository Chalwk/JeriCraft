/* Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. */

/* This is a Header-aware smooth scrolling for in-page anchors + skip-link target. */
document.addEventListener('DOMContentLoaded', function () {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
});