# Next.js Dashboard

Este é um projeto de um dashboard construído com Next.js, seguindo o tutorial oficial da Vercel. A aplicação permite gerenciar clientes e faturas, com funcionalidades de criação, edição, exclusão e visualização de dados.

## ✨ Funcionalidades

*   **Autenticação de Usuários:** Sistema de login para acesso ao dashboard.
*   **Dashboard com Visão Geral:** Apresenta um resumo das informações mais importantes, como total de faturas, faturas pendentes e pagas, e total de clientes.
*   **Gerenciamento de Faturas:**
    *   Listagem de todas as faturas com paginação.
    *   Criação de novas faturas.
    *   Edição de faturas existentes.
    *   Exclusão de faturas.
    *   Busca por faturas.
*   **Gerenciamento de Clientes:**
    *   Listagem de todos os clientes.
*   **Design Responsivo:** Interface adaptável para diferentes tamanhos de tela.

## 🚀 Tecnologias Utilizadas

*   **[Next.js](https://nextjs.org/):** Framework React para desenvolvimento de aplicações web.
*   **[React](https://react.dev/):** Biblioteca para construção de interfaces de usuário.
*   **[Tailwind CSS](https://tailwindcss.com/):** Framework CSS para estilização.
*   **[PostgreSQL](https://www.postgresql.org/):** Banco de dados para armazenamento das informações.
*   **[NextAuth.js](https://next-auth.js.org/):** Para autenticação de usuários.
*   **[Zod](https://zod.dev/):** Para validação de esquemas de dados.
*   **[Vercel](https://vercel.com/):** Plataforma de hospedagem e deploy.

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente local.

**Pré-requisitos:**

*   [Node.js](https://nodejs.org/en/) (versão 22.x ou superior)
*   [pnpm](https://pnpm.io/) (gerenciador de pacotes)

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/nextjs-dashboard.git
    cd nextjs-dashboard
    ```

2.  **Instale as dependências:**
    ```bash
    pnpm install
    ```

3.  **Configure as variáveis de ambiente:**
    *   Renomeie o arquivo `.env.example` para `.env`.
    *   Adicione as credenciais do seu banco de dados PostgreSQL no arquivo `.env`.

4.  **Execute o projeto:**
    ```bash
    pnpm dev
    ```

5.  **Acesse a aplicação:**
    Abra seu navegador e acesse `http://localhost:3000`.

## 📂 Estrutura de Pastas

A estrutura de pastas do projeto segue o padrão do Next.js com o App Router:

```
/
├── app/                # Rotas e páginas da aplicação
│   ├── dashboard/      # Rotas protegidas do dashboard
│   ├── lib/            # Funções de acesso a dados, ações e definições de tipos
│   ├── login/          # Página de login
│   └── ui/             # Componentes de UI reutilizáveis
├── auth.config.ts      # Configurações de autenticação
├── auth.ts             # Funções de autenticação
├── middleware.ts       # Middleware para rotas protegidas
├── next.config.ts      # Configurações do Next.js
└── ...
```

## 📄 Licença

Este projeto é baseado no tutorial oficial do Next.js e está disponível para fins de aprendizado.