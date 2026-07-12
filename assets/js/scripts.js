/* Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. */

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle button');
    const mainNav = document.querySelector('.main-nav');
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('show');
        });
    }

    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const parentLi = this.closest('.dropdown');
            if (parentLi) {
                document.querySelectorAll('.dropdown.open').forEach(drop => {
                    if (drop !== parentLi) drop.classList.remove('open');
                });
                parentLi.classList.toggle('open');
            }
        });
    });

    function handleResize() {
        if (window.innerWidth > 768) {
            document.querySelectorAll('.dropdown.open').forEach(drop => {
                drop.classList.remove('open');
            });
        }
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    document.addEventListener('click', function (e) {
        const openDropdowns = document.querySelectorAll('.dropdown.open');
        if (openDropdowns.length === 0) return;
        const isInsideDropdown = e.target.closest('.dropdown');
        if (!isInsideDropdown) {
            openDropdowns.forEach(d => d.classList.remove('open'));
        }
    });

    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', function () {
            const dropdown = this.closest('.dropdown');
            if (dropdown) dropdown.classList.remove('open');
        });
    });

    const header = document.querySelector('.header');
    if (header) {
        const updateScrollPadding = () => {
            const height = header.offsetHeight;
            document.documentElement.style.scrollPaddingTop = height + 'px';
        };

        updateScrollPadding();

        const ro = new ResizeObserver(updateScrollPadding);
        ro.observe(header);
    }
});

window.shareOn = function (platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    let shareUrl = '';
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
    window.open(shareUrl, '_blank', 'width=600,height=400');
};