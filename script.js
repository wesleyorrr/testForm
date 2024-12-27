document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Enviar dados para o Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbw8W6eLQI83TJgTRpjJX2V3i565YJShNSdgJspnvVBiX9VDNJ0wqLLgqLSnb2-fxHUgAg/exec', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            alert('Formulário enviado com sucesso!');
        } else {
            alert('Ocorreu um erro ao enviar o formulário.');
        }
    })
    .catch(error => console.error('Erro:', error));
});