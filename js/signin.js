// Sign-In Form Logic using localStorage

const STORAGE_KEY = 'signInUsers';

export function initSignInForm() {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

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

        // Save to localStorage
        const users = getUsers();
        users.push(newUser);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

        alert('Form submitted and user signed in!');
        form.reset();

        // Trigger custom event for dashboard update
        window.dispatchEvent(new CustomEvent('signInUpdated'));
    });
}

export function getUsers() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}
