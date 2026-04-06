/* ============================================
   Sidebar: Active state & Mobile toggle
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.pathname.split('/').pop() || 'overview.html';

    // Order-related pages
    var orderPages = ['orders.html', 'send-orders.html', 'payment-links.html', 'checkout.html'];
    var isOrderPage = orderPages.indexOf(currentPage) !== -1;

    // Set active state on nav items
    document.querySelectorAll('.nav-item, .nav-sub').forEach(function(item) {
        var href = item.getAttribute('href');
        if (!href) return;
        var linkPage = href.split('/').pop();

        // Exact match for active
        if (linkPage === currentPage) {
            if (item.classList.contains('nav-sub')) {
                item.classList.add('active-sub');
            } else {
                item.classList.add('active');
            }
        }

        // Highlight Orders parent when on any order sub-page
        if (linkPage === 'orders.html' && isOrderPage) {
            item.classList.add('active');
        }
    });

    // Show/hide order sub-items
    var orderSubs = document.querySelectorAll('.nav-sub[data-group="orders"]');
    orderSubs.forEach(function(sub) {
        sub.style.display = isOrderPage ? '' : 'none';
    });

    // Toggle order sub-items when clicking Orders nav-item
    var ordersNavItem = document.querySelector('.nav-item[data-toggle="orders"]');
    if (ordersNavItem) {
        ordersNavItem.addEventListener('click', function(e) {
            if (isOrderPage) return; // Don't toggle on order pages, navigate instead
            e.preventDefault();
            orderSubs.forEach(function(sub) {
                sub.style.display = sub.style.display === 'none' ? '' : 'none';
            });
        });
    }

    // Mobile hamburger toggle
    var hamburger = document.querySelector('.topbar-hamburger');
    var sidebar = document.querySelector('.sidebar');
    var overlay = document.querySelector('.sidebar-overlay');

    if (hamburger && sidebar) {
        hamburger.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            if (overlay) overlay.classList.toggle('open');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function() {
            sidebar.classList.remove('open');
            overlay.classList.remove('open');
        });
    }
});
