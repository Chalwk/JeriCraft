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

    const tocHeadings = document.querySelectorAll('.page-content h2');
    tocHeadings.forEach(h2 => {
        if (h2.textContent.trim() === 'Table of Contents') {
            const nextUl = h2.nextElementSibling;
            if (nextUl && nextUl.tagName === 'UL') {
                nextUl.classList.add('toc');
            }
        }
    });

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

    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTopBtn';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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