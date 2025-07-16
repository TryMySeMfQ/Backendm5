# 📦 API Alere

API desenvolvida com o objetivo de combater o desperdício de alimentos e a insegurança alimentar no Brasil, conectando doadores a famílias em situação de vulnerabilidade.

## 📌 Visão Geral

O sistema Alere permite o monitoramento de alimentos desde o cadastro até a entrega, com foco em rastreabilidade, impacto social e eficiência logística. Possui funcionalidades como:

- Cadastro de famílias receptoras
- Cadastro de doações e alimentos
- Registro e acompanhamento de agendamentos
- Geração de estatísticas e indicadores sociais
- Comunicação via notificações
- Registro e autenticação de usuários (JWT)

---

## ✅ Requisitos do Sistema

- Node.js 18+
- Banco de dados (PostgreSQL ou MySQL)
- ORM: Prisma ou Sequelize
- CORS configurado
- API existente do projeto final do M4 como base

---

## 🔐 Autenticação (JWT)

- Rota de registro: `POST /auth/register`
- Rota de login: `POST /auth/login`
- Uso de `bcrypt` para hash de senhas
- Geração e verificação de tokens JWT via cookies
- Middleware de autenticação protege rotas privadas

---

## 🛠️ Validação de Dados

- Middleware dedicado para validação de `body`, `params` e `query`
- Retorno de mensagens de erro claras e padronizadas

---

## 📘 Endpoints da API

### 🔸 Receptores (Famílias em vulnerabilidade)

| Método | Rota                        | Descrição                      |
|--------|-----------------------------|--------------------------------|
| POST   | `/receptor/cadastro`        | Cadastra uma nova família      |
| PUT    | `/receptor/atualizar/:id`   | Atualiza dados da família      |
| DELETE | `/receptor/deletar/:id`     | Remove uma família             |

### 🔸 Distribuidores

| Método | Rota                            | Descrição                          |
|--------|---------------------------------|------------------------------------|
| POST   | `/distribuidor/cadastro`        | Cadastra distribuidor              |
| PUT    | `/distribuidor/atualizar/:id`   | Atualiza dados do distribuidor     |
| DELETE | `/distribuidor/deletar/:id`     | Remove distribuidor                |

### 🔸 Alimentos

| Método | Rota                        | Descrição                          |
|--------|-----------------------------|------------------------------------|
| POST   | `/alimento/cadastro`        | Cadastra alimento                  |
| PUT    | `/alimento/atualizar/:id`   | Atualiza alimento                  |
| DELETE | `/alimento/deletar/:id`     | Remove alimento                    |

### 🔸 Doações

| Método | Rota                       | Descrição                          |
|--------|----------------------------|------------------------------------|
| POST   | `/doacao/cadastro`         | Registra nova doação               |
| PUT    | `/doacao/atualizar/:id`    | Atualiza dados da doação           |
| DELETE | `/doacao/deletar/:id`      | Remove doação                      |

### 🔸 Agendamentos

| Método | Rota                           | Descrição                           |
|--------|--------------------------------|-------------------------------------|
| POST   | `/agendamento/cadastro`        | Cadastra agendamento de entrega     |
| PUT    | `/agendamento/atualizar/:id`   | Atualiza agendamento                |
| DELETE | `/agendamento/deletar/:id`     | Remove agendamento                  |

### 🔸 Notificações

| Método | Rota                           | Descrição                         |
|--------|--------------------------------|-----------------------------------|
| POST   | `/notificacoes/cadastro`       | Envia notificação                 |
| PUT    | `/notificacoes/atualizar/:id`  | Atualiza notificação              |
| DELETE | `/notificacoes/deletar/:id`    | Remove notificação                |

### 🔸 Estatísticas

| Método | Rota                           | Descrição                         |
|--------|--------------------------------|-----------------------------------|
| POST   | `/estatistica/cadastro`        | Cadastra nova estatística         |
| PUT    | `/estatistica/atualizar/:id`   | Atualiza estatística              |
| DELETE | `/estatistica/deletar/:id`     | Remove estatística                |

---

## 🧩 Tabelas no Banco de Dados

- **Receptores**: Dados das famílias receptoras
- **Distribuidor**: Responsáveis pela logística
- **Alimento**: Registro de alimentos disponíveis
- **Doacao**: Histórico das doações
- **Agendamento**: Entregas agendadas
- **Notificacoes**: Comunicação interna
- **Estatistica**: Indicadores de impacto

---

## 📈 Objetivos do Sistema

- Facilitar a conexão entre doadores e famílias
- Garantir rastreabilidade de alimentos
- Acompanhar o impacto social em tempo real
- Criar histórico de participação de usuários

---

## 🔄 Tecnologias Utilizadas

- Node.js
- Express.js
- Prisma ou Sequelize
- JWT + Bcrypt
- Middleware de validação (zod / express-validator)
- PostgreSQL / MySQL
- CORS

---

## 🚀 Inicialização do Projeto

```bash
# Instale as dependências
npm install

# Configure o banco de dados no arquivo .env

# Execute as migrações (Prisma)
npx prisma migrate dev

# Rode o servidor
npm run dev
```

---

## 👥 Equipe do Projeto

Desenvolvido como parte do projeto final do Módulo 5 - API com ORM e Autenticação JWT.
