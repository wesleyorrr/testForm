# php-project/php-project/README.md

# Documentação do Projeto PHP

Este projeto consiste em um sistema simples para coletar dados de um formulário e exibi-los em uma página HTML. O projeto contém os seguintes arquivos:

## Estrutura do Projeto

```
php-project
├── salvar_tela.html
├── store_data.php
└── README.md
```

## Arquivos

### `salvar_tela.html`

Este arquivo HTML é responsável por exibir o conteúdo do arquivo `form_data.txt`, que é gerado pelo script PHP `store_data.php`. Ele inclui um código que lê e mostra os dados salvos.

### `store_data.php`

Este arquivo PHP processa os dados enviados via método POST a partir de um formulário. Ele salva as informações (nome, email e mensagem) em um arquivo de texto chamado `form_data.txt`. Após a gravação, o script retorna uma mensagem indicando se os dados foram salvos com sucesso ou se ocorreu um erro.

## Como Usar

1. **Configuração do Ambiente**: Certifique-se de que você tenha um servidor web com suporte a PHP (como Apache ou Nginx) configurado em sua máquina.

2. **Colocando os Arquivos no Servidor**: Coloque todos os arquivos do projeto na raiz do seu servidor web.

3. **Acessando o Formulário**: Crie um formulário HTML que envie dados para `store_data.php` usando o método POST.

4. **Visualizando os Dados**: Após enviar os dados pelo formulário, você pode abrir `salvar_tela.html` em um navegador para visualizar os dados salvos.

## Observações

- Certifique-se de que o servidor tenha permissões adequadas para gravar no arquivo `form_data.txt`.
- O arquivo `form_data.txt` será criado automaticamente na primeira vez que os dados forem salvos.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções neste projeto.