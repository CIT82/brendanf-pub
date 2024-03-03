console.log('connected');
const FORM = document.getElementById('form');
const SENT = document.getElementById('sent');

FORM.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    const p = document.createElement('p');
    p.textContent = `Hello ${name}. We will review your ${message} under ${subject}.`;
    p.textContent += ` We will call you at ${phone} and email you at ${email}. Thank you for reaching out to Vault-Tec.`;
    SENT.appendChild(p);
    FORM.reset();
});