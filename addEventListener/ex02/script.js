// script.js
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const feedback = document.getElementById('feedback');

    if (name === '') {
        feedback.textContent = 'Por favor, insira seu nome.';
    } else if (email === '') {
        feedback.textContent = 'Por favor, insira seu email.';
    } else if (!validateEmail(email)) {
        feedback.textContent = 'Por favor, insira um email válido.';
    } else {
        feedback.textContent = 'Inscrição bem-sucedida!';
        feedback.style.color = 'green';
        // Aqui você pode enviar o formulário via AJAX ou realizar outras ações necessárias
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
