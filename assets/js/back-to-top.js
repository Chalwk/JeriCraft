/* Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. */

/* Floating back-to-top button. */
document.addEventListener('DOMContentLoaded', function () {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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