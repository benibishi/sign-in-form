// Main JavaScript - Sign-In Form and Dashboard

const STORAGE_KEY = 'signInUsers';

// Helper: Get users from localStorage
function getUsers() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

// Helper: Save users to localStorage
function saveUsers(users) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

// Sign-In Form Logic
function initSignInForm() {
    const form = document.querySelector('form');
    if (!form) return;

    console.log('Sign-in form initialized');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Form submitted');

        const fullName = document.getElementById('fullName').value;
        const companyName = document.getElementById('companyName').value;
        const roleTrade = document.getElementById('roleTrade').value;
        const safetyInduction = document.getElementById('safetyInduction').checked;

        if (!fullName || !companyName || !roleTrade || !safetyInduction) {
            alert('Please fill in all required fields and confirm safety induction.');
            return;
        }

        const newUser = {
            id: Date.now().toString(),
            fullName: fullName,
            companyName: companyName,
            roleTrade: roleTrade,
            safetyInduction: safetyInduction,
            timestamp: new Date().toISOString()
        };

        const users = getUsers();
        users.push(newUser);
        saveUsers(users);

        console.log('User saved:', newUser);
        alert('Form submitted and user signed in!');
        form.reset();
    });
}

// Dashboard Logic
function initDashboard() {
    const signedInUsersTableBody = document.querySelector('#signedInUsersTable tbody');
    const totalCountElement = document.getElementById('totalCount');

    if (!signedInUsersTableBody || !totalCountElement) return;

    console.log('Dashboard initialized');
    renderDashboard();

    function renderDashboard() {
        const signedInUsers = getUsers();
        console.log('Dashboard loaded', signedInUsers.length, 'users');

        signedInUsers.sort((a, b) => a.companyName.localeCompare(b.companyName));
        totalCountElement.textContent = signedInUsers.length;
        signedInUsersTableBody.innerHTML = '';

        if (signedInUsers.length === 0) {
            const noUsersRow = signedInUsersTableBody.insertRow();
            const cell = noUsersRow.insertCell();
            cell.colSpan = 4;
            cell.textContent = 'No users signed in yet.';
            cell.style.textAlign = 'center';
            return;
        }

        signedInUsers.forEach(user => {
            const row = signedInUsersTableBody.insertRow();
            
            const companyCell = row.insertCell();
            companyCell.textContent = user.companyName;
            companyCell.setAttribute('data-label', 'Company');
            
            const roleCell = row.insertCell();
            roleCell.textContent = user.roleTrade;
            roleCell.setAttribute('data-label', 'Trade');
            
            const nameCell = row.insertCell();
            nameCell.textContent = user.fullName;
            nameCell.setAttribute('data-label', 'Name');
            
            const statusCell = row.insertCell();
            statusCell.textContent = user.safetyInduction ? 'Completed' : 'Pending';
            statusCell.setAttribute('data-label', 'Status');
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initSignInForm();
    initDashboard();
});
