// Dashboard page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const userDisplay = document.getElementById('userDisplay');
    const sidebarUsername = document.getElementById('sidebarUsername');
    const logoutBtn = document.getElementById('logoutBtn');

    // Get username from localStorage
    const username = localStorage.getItem('username');
    
    // Check if user is logged in
    if (!username) {
        // Redirect to login if no username found
        window.location.href = 'index.html';
        return;
    }

    // Display username in all locations that exist
    if (userDisplay) userDisplay.textContent = username;
    if (sidebarUsername) sidebarUsername.textContent = username;

    // Handle logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('username');
            window.location.href = 'index.html';
        });
    }

    // Make username available globally for chatbot integration
    window.currentUsername = username;
    
    // Add some interactive effects
    if (logoutBtn) {
        logoutBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        logoutBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }

    // Add keyboard shortcut for logout (Ctrl+L)
    document.addEventListener('keydown', function(e) {
        if (logoutBtn && e.ctrlKey && e.key === 'l') {
            e.preventDefault();
            logoutBtn.click();
        }
    });

    // Add session timeout warning (optional)
    let sessionTimeout;
    function resetSessionTimeout() {
        clearTimeout(sessionTimeout);
        sessionTimeout = setTimeout(() => {
            if (logoutBtn && confirm('Your session is about to expire. Would you like to stay logged in?')) {
                resetSessionTimeout();
            } else if (logoutBtn) {
                logoutBtn.click();
            }
        }, 30 * 60 * 1000); // 30 minutes
    }

    // Reset timeout on user activity
    document.addEventListener('mousemove', resetSessionTimeout);
    document.addEventListener('keypress', resetSessionTimeout);
    
    // Start session timeout
    resetSessionTimeout();

    // Add some visual feedback for the chatbot area
    const chatbotArea = document.getElementById('chatbotArea');
    if (chatbotArea) {
        setTimeout(() => {
            chatbotArea.style.opacity = '0';
            chatbotArea.style.transform = 'translateY(20px)';
            requestAnimationFrame(() => {
                chatbotArea.style.transition = 'all 0.6s ease';
                chatbotArea.style.opacity = '1';
                chatbotArea.style.transform = 'translateY(0)';
            });
        }, 100);
    }
});

// Utility function for chatbot integration
function getCurrentUsername() {
    return localStorage.getItem('username') || window.currentUsername;
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getCurrentUsername };
} 