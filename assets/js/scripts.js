/* Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. */

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle button');
    const mainNav = document.querySelector('.main-nav');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Mobile nav toggle ---------- */
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('show');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close nav when a link inside it is clicked (mobile UX)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    mainNav.classList.remove('show');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    /* ---------- Dropdowns ---------- */
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
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

    // Close open dropdowns on outside click
    document.addEventListener('click', function (e) {
        const openDropdowns = document.querySelectorAll('.dropdown.open');
        if (!openDropdowns.length) return;
        if (!e.target.closest('.dropdown')) {
            openDropdowns.forEach(d => {
                d.classList.remove('open');
                d.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
            });
        }
    });

    // Close open dropdowns on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
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