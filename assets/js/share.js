/* Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. */

/* Global share helper invoked from inline onclick handlers. */
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