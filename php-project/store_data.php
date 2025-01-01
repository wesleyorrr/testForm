Conteúdo do arquivo: /php-project/php-project/store_data.php

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $data = "Nome: $name\nEmail: $email\nMensagem: $message\n\n";
    file_put_contents('form_data.txt', $data, FILE_APPEND);

    echo "Dados salvos com sucesso!";
} else {
    echo "Método de requisição inválido.";
}
?>