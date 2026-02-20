// Main entry point - Initialize page-specific logic

// Import page-specific modules
import { initSignInForm } from './signin.js';
import { initDashboard } from './dashboard.js';

console.log('Main module loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    // Initialize sign-in form if on index.html
    initSignInForm();
    
    // Initialize dashboard if on dashboard.html
    initDashboard();
});
