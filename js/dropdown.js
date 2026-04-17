/* ============================================
   Dropdown: close on outside click
   ============================================ */
document.addEventListener('click', function(e) {
    // Close language dropdown
    document.querySelectorAll('.lang-dropdown.open').forEach(function(el) {
        if (!el.contains(e.target)) el.classList.remove('open');
    });
    // Close user dropdown
    document.querySelectorAll('.user-dropdown.open').forEach(function(el) {
        if (!el.contains(e.target)) el.classList.remove('open');
    });
    // Close theme dropdown
    document.querySelectorAll('.theme-dropdown.open').forEach(function(el) {
        if (!el.contains(e.target)) el.classList.remove('open');
    });
});
