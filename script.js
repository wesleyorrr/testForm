document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";
  
    fetch('https://script.google.com/macros/s/AKfycbzelvXiPcTSamM6_eUMRXm9pY5-fNFdIUX0U5JDZhTvId_0wX2Jzr6tsuhejS0UnT0/exec', { // ***SUBSTITUA PELO URL DO SEU SCRIPT***
      method: 'POST',
      mode: 'cors', // Importante para CORS
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => {
      if (!response.ok) { // Verifica se a resposta foi bem-sucedida (status 2xx)
        throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      submitButton.disabled = false;
      submitButton.textContent = "Enviar";
      if (data.result === 'success') {
        alert(data.message); // Exibe a mensagem do Apps Script
        document.getElementById('contactForm').reset();
      } else {
        alert("Erro ao enviar o formulário: " + data.message); // Mensagem de erro mais clara
      }
    })
    .catch(error => {
      submitButton.disabled = false;
      submitButton.textContent = "Enviar";
      console.error("Erro:", error);
      alert("Ocorreu um erro ao enviar o formulário. Verifique sua conexão e tente novamente.");
    });
  });
  