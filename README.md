# Hello World - SD

Este projeto é uma atividade da disciplina de Sistemas Distribuídos (SD), desenvolvida pelos estudantes **Emanoel** e **Cleiton**. O objetivo é criar uma aplicação simples utilizando Docker e Docker Compose para rodar um serviço web integrado a um banco de dados MySQL.

## Requisitos

Antes de rodar a aplicação, certifique-se de ter instalado em sua máquina:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Como rodar a aplicação

1. Clone este repositório:
   ```sh
   git clone https://github.com/emanoelCarvalho/helloWorld-SD.git
   cd helloWorld-SD
   ```
2. Construa as imagens e suba os containers:
   ```sh
   docker-compose up --build -d
   ```
3. Acesse a aplicação:
   - A **rota raiz** (`/`) retorna um **Hello World**.
   - A **rota `/data`** retorna a **listagem dos dados armazenados no MySQL**.

## Estrutura do Projeto

```
/
├── app/                 # Código da aplicação
├── db/                  # Configuração do banco de dados
├── docker-compose.yml   # Arquivo de orquestração dos serviços
├── Dockerfile           # Definição da imagem do serviço
└── README.md            # Documentação do projeto
```

## Parar a aplicação
Para parar os containers, execute:
```sh
docker-compose down
```

## Autores
- **Emanoel**
- **Cleiton**

