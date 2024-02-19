<h1 align="center">
  <br>
   Bora
  <br>
</h1>
<h4 align="center">Um e-commerce de eventos</h4>  

<p align="center">
  <a href="#key-features">Principais Features</a> •
  <a href="#how-to-use">Instalar e rodar o projeto</a> •
  <a href="#credits">Melhorias - TODO</a> •
  <a href="#credits">Contribuidores</a> •
  <a href="#license">Licença</a>
</p>

## Principais Features

* Navegação nos eventos com informações de cada um deles
* Adicionar eventos ao carrinho
* Tela de pagamento
* Painel de administrador com edição dos eventos cadastrados
* Tela de cadastro de usuário
* Tela de cadastro de pessoa jurídica para cadastro do evento
* Homepage com destaque de eventos no carrossel.

## Instalar e rodar o projeto

Para clonar e rodar essa aplicação, você precisará do [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que vem com o [npm](http://npmjs.com)) instalados na sua máquina. Da sua linha de comando:

```bash
# Clone este repositório
$ git clone https://github.com/evans-costa/bora.git

# Vá para a pasta do repositório
$ cd bora
```

```bash
# Instalar dependências
$ npm install
```

Nesse momento do projeto, para rodar o banco de dados MySQL, você precisará instalar o [XAMPP](https://www.apachefriends.org/pt_br/index.html) e o [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
> **📌 Nota:** </br>
> Você pode seguir [este tutorial](https://www.youtube.com/watch?v=f_EGF3027qs) para configurar as instalações tanto do XAMPP quando do MySQL Workbench.

Para rodar o projeto, basta executar o seguinte comando:

```bash
# Rodar o projeto
$ npm run start
```

### Cadastro de usuários manualmente

1. No ambiente de desenvolvimento você pode acessar http://localhost:3000/cadastrar/tipocadastro
2. Siga o fluxo de acordo com o tipo de cadastro (funcionário ou usuário comum)
3. Pode ser preenchido com **qualquer email**, mesmo que ele não exista
4. Uma vez cadastrado, pode ser feito o login acessando http://localhost:3000/login

## Melhorias - TODO

Algumas melhorias que estão em vista para a melhora desse projeto são:

- [ ] Configurar variáveis de ambiente do projeto
- [ ] Configurar banco de dados local com Docker/Docker Compose
- [ ] Criar as migrations com Sequeliza
- [ ] Criar os seeds `admin` e `user` padrão automaticamente quando rodar o projeto
- [ ] Adequar rotas para padrão RESTful
- [ ] Aprimorar UI/UX
- [ ] Testes unitários

## Contribuidores

<a href="https://github.com/evans-costa/bora/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=evans-costa/bora" alt="Lista de contribuidores"/>
</a>

## Licença

The MIT License (MIT) 2023 - Evandro Costa. Por favor, dê uma olhada em LICENSE para mais detalhes.

---
