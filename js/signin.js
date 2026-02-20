// Sign-In Form Logic

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
            fullName: fullName,
            companyName: companyName,
            roleTrade: roleTrade,
            safetyInduction: safetyInduction,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        };

        firebase.database().ref('signIns').push(newUser)
            .then(() => {
                alert('Form submitted and user signed in!');
                form.reset();
            })
            .catch((error) => {
                alert('Error signing in: ' + error.message);
            });
    });
}
