/* Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. */

/* Live Minecraft server status widget (mcsrvstat.us). */
document.addEventListener('DOMContentLoaded', function () {
    const statusEl = document.getElementById('server-status');
    if (!statusEl) return;

    const host = statusEl.dataset.serverHost;
    const cacheKey = 'server-status:' + host;
    const cacheTtl = 5 * 60 * 1000;

    const render = d => {
        const text = statusEl.querySelector('.status-text');
        if (!text) return;
        const online = !!(d && d.online);
        statusEl.classList.toggle('online', online);
        statusEl.classList.toggle('offline', !online);
        text.textContent = online
            ? `${d.players && d.players.online != null ? d.players.online : 0}/${d.players && d.players.max != null ? d.players.max : '?'} online` +
            (d.version ? ` \u00b7 ${d.version}` : '')
            : 'Server offline';
        statusEl.hidden = false;
    };

    let cached = null;
    try {
        const raw = sessionStorage.getItem(cacheKey);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Date.now() - parsed.t < cacheTtl) cached = parsed.d;
        }
    } catch (e) { /* ignore */ }

    const fetchStatus = () => {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 5000);
        return fetch('https://api.mcsrvstat.us/3/' + encodeURIComponent(host), { signal: ctrl.signal })
            .then(r => (r.ok ? r.json() : Promise.reject(new Error('Bad status'))))
            .then(d => {
                const slim = {
                    online: !!d.online,
                    players: d.players ? { online: d.players.online, max: d.players.max } : null,
                    version: d.version
                };
                render(slim);
                try { sessionStorage.setItem(cacheKey, JSON.stringify({ t: Date.now(), d: slim })); } catch (e) { /* ignore */ }
            })
            .catch(() => { /* leave hidden if the API is slow or unreachable */ })
            .finally(() => clearTimeout(timer));
    };

    if (cached) {
        render(cached);
    } else {
        fetchStatus();
    }

    // Refresh on tab focus if the cache is stale
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState !== 'visible') return;
        let stale = true;
        try {
            const raw = sessionStorage.getItem(cacheKey);
            if (raw) {
                const parsed = JSON.parse(raw);
                stale = Date.now() - parsed.t > cacheTtl;
            }
        } catch (e) { /* ignore */ }
        if (stale) fetchStatus();
    });
});