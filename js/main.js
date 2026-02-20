// Main entry point - Initialize page-specific logic

// Import page-specific modules
import { initSignInForm } from './signin.js';
import { initDashboard } from './dashboard.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize sign-in form if on index.html
    initSignInForm();
    
    // Initialize dashboard if on dashboard.html
    initDashboard();
});
