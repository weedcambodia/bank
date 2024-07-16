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

function showSection(sectionId) {
    for (const section in sections) {
        if (sections.hasOwnProperty(section)) {
            sections[section].classList.add('hidden');
        }
    }
    sections[sectionId].classList.remove('hidden');
}
