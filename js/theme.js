/* ============================================
   CoinPal Theme Manager
   Modes: 'light' | 'dark' | 'system'
   Storage key: coinpal_theme
   Applies data-theme="light|dark" on <html>
   ============================================ */
(function() {
    const STORAGE_KEY = 'coinpal_theme';
    const VALID_MODES = ['light', 'dark', 'system'];

    function getMode() {
        const m = localStorage.getItem(STORAGE_KEY);
        return VALID_MODES.includes(m) ? m : 'system';
    }

    function getSystemTheme() {
        return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ? 'dark' : 'light';
    }

    function resolveTheme(mode) {
        return mode === 'system' ? getSystemTheme() : mode;
    }

    function applyTheme() {
        const mode = getMode();
        const resolved = resolveTheme(mode);
        document.documentElement.setAttribute('data-theme', resolved);
        document.documentElement.setAttribute('data-theme-mode', mode);

        // Update theme menu active states
        document.querySelectorAll('.theme-menu-item').forEach(function(el) {
            const m = el.getAttribute('data-mode');
            if (m) el.classList.toggle('active', m === mode);
        });
    }

    function setTheme(mode) {
        if (!VALID_MODES.includes(mode)) return;
        localStorage.setItem(STORAGE_KEY, mode);
        applyTheme();
        // Close the dropdown
        document.querySelectorAll('.theme-dropdown.open').forEach(function(el) {
            el.classList.remove('open');
        });
    }

    // Listen for system theme changes when mode = system
    if (window.matchMedia) {
        try {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
                if (getMode() === 'system') applyTheme();
            });
        } catch (e) {
            // Fallback for older browsers
            window.matchMedia('(prefers-color-scheme: dark)').addListener(function() {
                if (getMode() === 'system') applyTheme();
            });
        }
    }

    // Expose globals
    window.CoinPalTheme = { setTheme: setTheme, getMode: getMode, applyTheme: applyTheme };
    window.setTheme = setTheme;

    // Apply immediately (synchronous — prevents flash of wrong theme)
    applyTheme();

    // Re-apply on DOM ready to update menu active state
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyTheme);
    }
})();
