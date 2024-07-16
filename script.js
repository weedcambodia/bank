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

// Handle loan amount button clicks
document.getElementById('loanAmountButtons').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const loanAmount = event.target.value;
        document.getElementById('loanAmount').value = loanAmount;

        // Highlight the selected button
        const buttons = document.querySelectorAll('#loanAmountButtons button');
        buttons.forEach(button => button.classList.remove('selected'));
        event.target.classList.add('selected');
    }
});

document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const loanTerm = parseInt(document.getElementById('loanTerm').value);
    
    if (isNaN(loanAmount) || loanAmount <= 0) {
        alert('Please select a valid loan amount.');
        return;
    }
    
    if (isNaN(loanTerm) || loanTerm <= 0) {
        alert('Please select a valid loan term.');
        return;
    }
    
    const annualInterestRate = 0.06; // Example: 6% annual interest rate (adjust as needed)
    const additionalPerc = 0.0010; // 0.10% additional principal plus interest
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = loanTerm;
    
    // Calculate monthly payment including additional P+I
    const monthlyPayment = ((loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)))+ (loanAmount * additionalPerc) / 12;
    
    // Calculate monthly principal and interest components
    const monthlyInterestPayment = loanAmount * monthlyInterestRate;
    const monthlyPrincipalPayment = monthlyPayment - monthlyInterestPayment;
    
    // Calculate total repayment amount
    const totalRepaymentAmount = monthlyPayment * numberOfPayments;
    
    // Display results
    const resultMessage = `
        Loan Amount: $${loanAmount.toFixed(2)}<br>
        Loan Term: ${loanTerm} months<br>
        Monthly Payment: $${monthlyPayment.toFixed(2)}<br>
        Monthly Principal: $${monthlyPrincipalPayment.toFixed(2)}<br>
        Monthly Interest: $${monthlyInterestPayment.toFixed(2)}<br>
        Total Repayment: $${totalRepaymentAmount.toFixed(2)}<br>
    `;
    
    document.getElementById('loanResult').innerHTML = resultMessage;
    document.getElementById('loanResult').classList.remove('hidden');
});

function showSection(sectionId) {
    for (const section in sections) {
        if (sections.hasOwnProperty(section)) {
            sections[section].classList.add('hidden');
        }
    }
    sections[sectionId].classList.remove('hidden');
}
