document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const submitButton = document.querySelector('button[type="submit"]'); // Seleciona o botão de envio
    submitButton.disabled = true; // Desabilita o botão durante o envio
    submitButton.textContent = "Enviando..."; // Muda o texto do botão

    fetch('SEU_URL_DO_APPS_SCRIPT', { // Coloque o URL AQUI
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        submitButton.disabled = false; // Reabilita o botão
        submitButton.textContent = "Enviar"; // Restaura o texto do botão
        if (data.result === 'success') {
            alert('Formulário enviado com sucesso!');
            document.getElementById('contactForm').reset(); // Limpa o formulário
        } else {
            alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.');
        }
    })
    .catch(error => {
        submitButton.disabled = false;
        submitButton.textContent = "Enviar";
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar o formulário. Verifique sua conexão com a internet e tente novamente.');
    });
});