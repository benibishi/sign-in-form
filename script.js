document.addEventListener('DOMContentLoaded', () => {
    // Initialize signedInUsers array from localStorage
    let signedInUsers = JSON.parse(localStorage.getItem('signedInUsers')) || [];

    // Function to display signed-in users (Dashboard logic)
    function displaySignedInUsers() {
        const signedInUsersTableBody = document.querySelector('#signedInUsersTable tbody');
        const totalCountElement = document.getElementById('totalCount');

        if (!signedInUsersTableBody || !totalCountElement) {
            // Elements not found, likely not on the dashboard page
            return;
        }

        signedInUsersTableBody.innerHTML = ''; // Clear previous display
        totalCountElement.textContent = signedInUsers.length; // Update total count

        if (signedInUsers.length === 0) {
            const noUsersRow = signedInUsersTableBody.insertRow();
            const cell = noUsersRow.insertCell();
            cell.colSpan = 4; // Span across all columns
            cell.textContent = 'No users signed in yet.';
            cell.style.textAlign = 'center';
            return;
        }

        // Sort users by company name
        signedInUsers.sort((a, b) => a.companyName.localeCompare(b.companyName));

        signedInUsers.forEach(user => {
            const row = signedInUsersTableBody.insertRow();
            row.insertCell().textContent = user.companyName;
            row.insertCell().textContent = user.roleTrade;
            row.insertCell().textContent = user.fullName;
            row.insertCell().textContent = user.safetyInduction ? 'Completed' : 'Pending';
        });
    }

    // --- Conditional Logic based on current page ---

    // Logic for the main sign-in form page (index.html)
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const form = document.querySelector('form');
        if (form) { // Ensure form exists before adding event listener
            form.addEventListener('submit', (event) => {
                event.preventDefault(); // Prevent default form submission

                const fullName = document.getElementById('fullName').value;
                const companyName = document.getElementById('companyName').value;
                const roleTrade = document.getElementById('roleTrade').value;
                const safetyInduction = document.getElementById('safetyInduction').checked;

                // Basic validation (can be expanded)
                if (!fullName || !companyName || !roleTrade || !safetyInduction) {
                    alert('Please fill in all required fields and confirm safety induction.');
                    return;
                }

                // Create user object
                const newUser = {
                    fullName: fullName,
                    companyName: companyName,
                    roleTrade: roleTrade,
                    safetyInduction: safetyInduction,
                    timestamp: new Date().toLocaleString()
                };

                signedInUsers.push(newUser);
                localStorage.setItem('signedInUsers', JSON.stringify(signedInUsers));

                alert('Form submitted and user signed in!');
                form.reset(); // Clear form fields after submission
            });
        }
    }

    // Logic for the dashboard page (dashboard.html)
    if (window.location.pathname.includes('dashboard.html')) {
        displaySignedInUsers(); // Initial display of users on dashboard page load
    }
});
