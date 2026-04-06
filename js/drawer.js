/* ============================================
   Drawer / Slide-over Panel
   ============================================ */
function openDrawer(drawerId, overlayId) {
    var drawer = document.getElementById(drawerId);
    var overlay = document.getElementById(overlayId);
    if (overlay) overlay.classList.add('open');
    if (drawer) drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDrawer(drawerId, overlayId) {
    var drawer = document.getElementById(drawerId);
    var overlay = document.getElementById(overlayId);
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
}

// Close drawer when clicking overlay backdrop
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('drawer-overlay') && e.target.classList.contains('open')) {
        var drawerId = e.target.getAttribute('data-drawer');
        if (drawerId) {
            closeDrawer(drawerId, e.target.id);
        } else {
            // Fallback: close the corresponding drawer by finding the open one
            var openDrawer = document.querySelector('.drawer.open');
            if (openDrawer) {
                openDrawer.classList.remove('open');
            }
            e.target.classList.remove('open');
            document.body.style.overflow = '';
        }
    }
});
