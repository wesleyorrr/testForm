document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Enviar dados para o Google Sheets
    fetch('https://script.google.com/macros/s/AKfycbww4OGzPt46yykixcfPt82NBqZ2_R8S-eca04W6lMvyp1Gs5m3cUF3TBSp67C4InTUT/exec', {
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