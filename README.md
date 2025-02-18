# 🚀 Hello World com Docker e MySQL

## 📌 Descrição
Este projeto faz parte da disciplina de **Sistemas Distribuídos (SD)** e tem como objetivo criar uma aplicação "Hello World" que se conecta a um banco de dados MySQL. A aplicação é executada dentro de um container Docker e orquestrada com Docker Compose.

### 👨‍💻 Desenvolvido por:
- **Emanoel**
- **Cleiton**

## 📋 Requisitos
Antes de executar a aplicação, certifique-se de ter os seguintes softwares instalados em sua máquina:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## 🚀 Como rodar a aplicação
### 1️⃣ Clonar o repositório
```sh
git clone https://github.com/seu-repositorio.git
cd seu-repositorio
```

### 2️⃣ Construir e rodar os containers
```sh
docker-compose up -d --build
```
Esse comando:
- **Constrói** as imagens Docker caso elas ainda não existam.
- **Inicia** os containers em modo *detached* (-d), ou seja, em segundo plano.

### 3️⃣ Verificar se os containers estão rodando
```sh
docker ps
```
Se tudo estiver correto, você verá os containers `express_app` e `mysql_db` em execução.

### 4️⃣ Acessar a aplicação
Abra o navegador e acesse:
```
http://localhost:8080
```

## 🛠 Tecnologias Utilizadas
- **Docker** - Para conteinerização da aplicação e do banco de dados
- **Docker Compose** - Para orquestração dos containers
- **Node.js + Express** - Back-end da aplicação (pode ser substituído por outra linguagem)
- **MySQL** - Banco de dados relacional

## 🐛 Possíveis Erros e Soluções
### ❌ "docker-credential-desktop not installed or not available in PATH"
✅ Execute:
```sh
sudo apt-get install docker-credential-helpers
```

### ❌ Container MySQL não inicia corretamente
✅ Verifique os logs do container:
```sh
docker-compose logs -f mysql_db
```
Caso o erro seja relacionado a "Data directory", tente remover os volumes:
```sh
docker-compose down -v
```
E suba os containers novamente:
```sh
docker-compose up -d
```

---
**📌 Observação:** Caso tenha algum problema ao executar a aplicação, entre em contato com os desenvolvedores. 🚀

