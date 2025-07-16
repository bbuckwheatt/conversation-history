# AI Chatbot Portal

A modern, responsive 2-page website that emulates a login portal with a dashboard for deploying AI chatbots. The website captures user usernames and makes them available to the chatbot on the dashboard page.

## Features

- **Modern Login Portal**: Clean, responsive login page with username capture
- **Dashboard Interface**: Professional dashboard with chatbot deployment area
- **Username Persistence**: Username is stored and accessible across pages
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Session Management**: Automatic session timeout and logout functionality
- **Chatbot Integration Ready**: Prepared area for your AI chatbot code

## File Structure

```
conversation-history/
├── index.html          # Login page
├── dashboard.html      # Dashboard with chatbot area
├── styles.css          # Shared styles for both pages
├── script.js           # Login page JavaScript
├── dashboard.js        # Dashboard page JavaScript
└── README.md           # This file
```

## Quick Start

1. **Open the website**: Open `index.html` in your web browser
2. **Enter a username**: Type any username and click "Enter Portal"
3. **Access the dashboard**: You'll be redirected to the dashboard page
4. **Deploy your chatbot**: Replace the placeholder content in the chatbot area

## Chatbot Integration

### Accessing the Username

Your chatbot can access the username in several ways:

```javascript
// Method 1: From localStorage
const username = localStorage.getItem('username');

// Method 2: From global variable
const username = window.currentUsername;

// Method 3: Using the utility function
const username = getCurrentUsername();
```

### Integration Steps

1. **Locate the chatbot area**: Find the element with `id="chatbotArea"` in `dashboard.html`
2. **Replace placeholder content**: Remove the placeholder div and add your chatbot code
3. **Access username**: Use one of the methods above to get the username
4. **Style integration**: Your chatbot can use the existing CSS classes or add custom styles

### Example Integration

```html
<!-- In dashboard.html, replace the chatbot-placeholder div with: -->
<div class="chatbot-area" id="chatbotArea">
    <!-- Your chatbot HTML here -->
    <div id="your-chatbot-container">
        <!-- Your chatbot interface -->
    </div>
</div>
```

```javascript
// In your chatbot JavaScript:
const username = localStorage.getItem('username');
console.log('Current user:', username);

// Use the username in your chatbot logic
function initializeChatbot() {
    const user = getCurrentUsername();
    // Your chatbot initialization code
}
```

## Customization

### Styling

- **Colors**: Modify the CSS variables in `styles.css` for brand colors
- **Layout**: Adjust the grid layout in `.dashboard-main` for different arrangements
- **Responsive**: Update media queries for custom breakpoints

### Functionality

- **Session timeout**: Modify the timeout duration in `dashboard.js` (currently 30 minutes)
- **Validation**: Add username validation in `script.js`
- **Additional features**: Extend the dashboard with more functionality

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Security Notes

- This is a frontend-only implementation for demonstration purposes
- Username is stored in localStorage (client-side only)
- No server-side authentication is implemented
- For production use, implement proper authentication and security measures

## Development

### Local Development

1. Clone or download the files
2. Open `index.html` in your browser
3. Start developing your chatbot integration

### Live Server (Recommended)

For better development experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Troubleshooting

### Common Issues

1. **Username not showing**: Check browser console for JavaScript errors
2. **Styling issues**: Ensure `styles.css` is properly linked
3. **Redirect loops**: Clear localStorage if stuck in redirect loop
4. **Chatbot not working**: Check that your chatbot code is properly integrated

### Debug Mode

Add this to your browser console to debug:

```javascript
// Check if username is stored
console.log('Stored username:', localStorage.getItem('username'));

// Check global variable
console.log('Global username:', window.currentUsername);

// Clear all data (for testing)
localStorage.clear();
```

## License

This project is open source and available under the MIT License.

## Support

For issues or questions about the portal structure, check the code comments or browser console for debugging information. 