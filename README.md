# Task Manager API

Esta é uma aplicação Node(Express) simples, desenvolvida para fins didáticos e parte do desafio técnico da empresa Sphere Cyber Solutions . A aplicação permite que o usuário visualize uma lista de tarefas, crie novas tarefas e também consiga editar ou excluir.

## Rodando localmente

Requisitos:

- [Node.js >= 18](https://nodejs.org/en)
- [Docker compose](https://docs.docker.com/compose)

Clone o projeto

```bash
  git clone https://github.com/task-manager-api
```

Entre no diretório do projeto

```bash
  cd task-manager-api
```

Instale as dependências

```bash
  npm i
```

Inicie a aplicação

```bash
  docker compose up
```

A API estará disponível com a seguinte URL base:

http://localhost:9000/

## Funcionalidades

| ROTA               | HTTP   | Descrição                              |
| ------------------ | ------ | -------------------------------------- |
| api/tasks/todo     | GET    | Listar todas as tarefas a serem feitas |
| api/tasks/done     | GET    | Listar todas as tarefas concluídas     |
| api/tasks/new      | POST   | Criar nova tarefa                      |
| api/tasks/:task_id | PATCH  | Atualizar tarefa por Id                |
| api/tasks/:task_id | DELETE | Excluir tarefa por Id                  |

### Exemplo de Resposta (GET)

```json
[
  {
    "id": "65ea088450ec54231a4171fd",
    "desc": "Descrição da tarefa 1",
    "done": false
  },
  {
    "id": "65ead75a3001a9f1943bcdfb",
    "desc": "Descrição da tarefa 2",
    "done": false
  }
]
```

### Exemplo de Requisição (POST)

```json
{
  "desc": "Descrição da tarefa 1"
}
```

## Stack utilizada

- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Mongoose](https://mongoosejs.com/)
- [Typescript](https://www.typescriptlang.org/)

## Demonstração

A URL base da API está disponível no link abaixo:

https://task-manager-api-service.vercel.app/

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
