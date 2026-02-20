// Dashboard Logic using localStorage

const STORAGE_KEY = 'signInUsers';

export function initDashboard() {
    const signedInUsersTableBody = document.querySelector('#signedInUsersTable tbody');
    const totalCountElement = document.getElementById('totalCount');

    if (!signedInUsersTableBody || !totalCountElement) return;

    // Load initial data
    renderDashboard();

    // Listen for updates from sign-in form
    window.addEventListener('signInUpdated', renderDashboard);

    // Also listen for storage events (cross-tab sync)
    window.addEventListener('storage', (e) => {
        if (e.key === STORAGE_KEY) {
            renderDashboard();
        }
    });

    function renderDashboard() {
        const signedInUsers = getUsers();

        // Sort by company name
        signedInUsers.sort((a, b) => a.companyName.localeCompare(b.companyName));

        // Update total count
        totalCountElement.textContent = signedInUsers.length;

        // Clear table
        signedInUsersTableBody.innerHTML = '';

        if (signedInUsers.length === 0) {
            const noUsersRow = signedInUsersTableBody.insertRow();
            const cell = noUsersRow.insertCell();
            cell.colSpan = 4;
            cell.textContent = 'No users signed in yet.';
            cell.style.textAlign = 'center';
            return;
        }

        // Populate table
        signedInUsers.forEach(user => {
            const row = signedInUsersTableBody.insertRow();
            row.insertCell().textContent = user.companyName;
            row.insertCell().textContent = user.roleTrade;
            row.insertCell().textContent = user.fullName;
            row.insertCell().textContent = user.safetyInduction ? 'Completed' : 'Pending';
        });
    }
}

function getUsers() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}
