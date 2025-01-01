<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['name'];
    $email = $_POST['email'];
    $mensagem = $_POST['message'];

    // Validação básica no servidor (IMPORTANTE!)
    if (empty($nome) || empty($email) || empty($mensagem)) {
        echo json_encode(["status" => "erro", "mensagem" => "Por favor, preencha todos os campos. Servidor"]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "erro", "mensagem" => "Email inválido. Servidor"]);
        exit;
    }

    // Envio de email (usando a função mail do PHP - para produção, use PHPMailer)
    $destinatario = "seu_email@exemplo.com"; // Substitua pelo seu email
    $assunto = "Novo contato do formulário";
    $corpo_email = "Nome: $nome\nEmail: $email\nMensagem: $mensagem";
    $headers = "From: $email";

    if (mail($destinatario, $assunto, $corpo_email, $headers)) {
        echo json_encode(["status" => "sucesso", "mensagem" => "Mensagem enviada com sucesso!"]);
    } else {
        echo json_encode(["status" => "erro", "mensagem" => "Erro ao enviar o email. Tente novamente mais tarde. Servidor"]);
    }
} else {
    echo json_encode(["status" => "erro", "mensagem" => "Acesso inválido. Servidor"]);
}
?>