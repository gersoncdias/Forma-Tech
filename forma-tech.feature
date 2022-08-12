#language: pt
#encoding: utf-8

Feature: Fluxo de usuários do Demoblaze

Cenário: Realizar acesso
    Dado acesso o site "https://demoblaze.com/index.html"
    Quando o usuário clica no botão da barra de navegação "Inscrever-se"
    Então deve abrir um formulário de cadástro

Cenário: Realizar cadastro
    Dado que digito o nome de usuário e a senha
    Quando o usuário clica no botão "Inscrever-se",
    Então o formulário é preenchido e enviado
    E uma mensagem de alerta é exibida com o texto "Cadastro bem sucedido"

Cenário: O usuário deve ser capaz de fazer login com usuário e senha válido
    Quando o usuário clica no botão da barra de navegação "Conecte-se"
    Então deve preenche o formulário, com Nome de usuário e senha validos 
    E clicar no botao "Conecte-se"
    Então uma menssagem de Bem Vindo é exibida na barra de navegação com o nome do usuário

Cenário: Confirmar se o usuário que acessou é o mesmo que esta logado
    Dado que o usuário tem acesso ao sistema
    Quando os dados são informados
    Então o nome do usuário correto é exibido na barra de navegação

Cenário: Como um usuário inválido, devo visualizar uma mensagem de erro e continuar na página de Login
    Dado que estou na tela de Login
    Quando digitar credenciais inválidas
    E clicar no botão login
    Então devo ver uma mensagem de erro "Usuário não existe"
    E devo estar na tela de Login

    Cenário: quando não preencho o campo de login ou senha, devo visualizar uma mensagem de erro e continuar na página de Login
    Dado que estou na tela de Login
    Quando deixar de digitar uma credencial inválida
    E clicar no botão login
    Então devo ver uma mensagem de erro "Por favor, preencha o nome de usuário e senha."
    E devo estar na tela de Login

Cenário: o usuário deve poder adicionar item ao carrinho
    Quando aplico o filtro aos itens por categorias 
    Então seleciono o item desejado,e em seguida sou direcionado para uma pagina com as informações
de preço e a descrição do produto 
    Quando clico no botão "adicionar ao carrinho" uma mensagem de alerta é exibida com o texto "Produto adicionado"

Cenário: o usuário deve poder adicionar outros itens ao carrinho
    Dado novo filtro de categoria
    Quando um novo item é selecionado, novamente sou direcionado para uma pagina com as informações de preço e a escrição do produto
    Quando clico no botão "adicionar ao carrinho" uma mensagem de alerta é exibida com o texto "Produto adicionado"

Cenário: o usuário deve poder excluir um item do carrinho
    Quando o usuário clica no botão da barra de navegação "Carrinho"
Em seguida, clica no botão "excluir" do item selecionado, o item é excluído do carrinho

Cenário: O usuário deve ser capaz de fazer o pedido
    Quando o usuário clica no botão da barra de navegação "Carrinho" e entao e listado os itens com o valor total da compra
    Quando clica em "faça sua encomenda" e exibido um formulario para efetuar o pagamento
Apos preenche o formulario com  "nome, país, cidade, Cartão de credico, mẽs e ano" e clica em comprar
    Então a compra é efetuada, e então recebo uma mensagem "Obrigado por sua compra" com o Id da compra, valor pago, numero do catão, nome do comprador e a data da compra
ao clicar em "ok" retorno para pagina inicial do site