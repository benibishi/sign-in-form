// Dashboard Logic

export function initDashboard() {
    const signedInUsersTableBody = document.querySelector('#signedInUsersTable tbody');
    const totalCountElement = document.getElementById('totalCount');

    if (!signedInUsersTableBody || !totalCountElement) return;

    firebase.database().ref('signIns').on('value', (snapshot) => {
        const data = snapshot.val();
        const signedInUsers = [];

        if (data) {
            Object.values(data).forEach(user => {
                signedInUsers.push(user);
            });
        }

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
    });
}
