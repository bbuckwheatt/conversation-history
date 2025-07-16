// Login page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');

    // Check if user is already logged in
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        // Redirect to dashboard if already logged in
        window.location.href = 'dashboard.html';
        return;
    }

    // Handle form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = usernameInput.value.trim();
        
        if (username) {
            // Store username in localStorage
            localStorage.setItem('username', username);
            
            // Add a small delay for better UX
            const submitBtn = loginForm.querySelector('.login-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = `
                <span>Redirecting...</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin">
                    <path d="M21 12a9 9 0 11-6.219-8.56"/>
                </svg>
            `;
            
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1000);
        }
    });

    // Add some interactive effects
    usernameInput.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });

    usernameInput.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });

    // Add enter key support
    usernameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            loginForm.dispatchEvent(new Event('submit'));
        }
    });
}); 