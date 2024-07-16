document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For demonstration purposes, use a fixed username and password
    if (username === 'chhun' && password === 'q1234') {
        document.getElementById('login').classList.add('hidden');
        document.getElementById('account').classList.remove('hidden');
        showSection('home');
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('logout').addEventListener('click', function() {
    document.getElementById('login').classList.remove('hidden');
    document.getElementById('account').classList.add('hidden');
    document.getElementById('loginForm').reset();
});

const sections = {
    home: document.getElementById('home'),
    wallet: document.getElementById('wallet'),
    status: document.getElementById('status'),
    service: document.getElementById('service')
};

document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('home');
});

document.getElementById('walletLink').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('wallet');
});

document.getElementById('statusLink').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('status');
});

document.getElementById('serviceLink').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('service');
});

document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const loanAmount = document.getElementById('loanAmount').value;
    const loanTerm = document.getElementById('loanTerm').value;

    // Display confirmation message
    const confirmationMessage = `Thank you for applying for a loan of $${loanAmount} with a term of ${loanTerm} months. Please wait while our team processes your application.`;
    document.getElementById('loanResult').innerText = confirmationMessage;
    document.getElementById('loanResult').classList.remove('hidden');

    // Optional: You can add additional logic here to submit the loan application data to a server or perform other actions.
});

function showSection(sectionId) {
    for (const section in sections) {
        if (sections.hasOwnProperty(section)) {
            sections[section].classList.add('hidden');
        }
    }
    sections[sectionId].classList.remove('hidden');
}
