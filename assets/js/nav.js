/* Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. */

/* Mobile nav toggle, dropdown menus, and resize cleanup. */
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle button');
    const mainNav = document.querySelector('.main-nav');

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
});