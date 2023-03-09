# Challenge-Backend-brisanet


# Tecnologias
- Node.js
- Express
- Typescrip
- Prisma
- Isonmnia

# Partes concluidas

-  __Básico__
   - Requisitoas
      - O sistema deve ser capaz de estabelecer uma conexão com um banco de dados Postgres. ✅
      - O sistema deve ser capaz de lidar com requisições com formato de dados do tipo JSON.
      - O sistema deve ser capaz de cadastrar professores, alunos e cadeiras(matérias).
      - O sistema deve ser capaz de persistir essas informações em um banco de dados relacional.
   - Adicionar arquivo de rotas do Insomnia
   - Adicionar migrations
   - Adicionar o diagrama do banco de dados

- __Intermediário__
   - Requisitoas
      - O professor deve ser capaz de cadastrar uma ou mais cadeiras(matérias).
      - O aluno deve ser capaz de se matricular em uma ou mais cadeiras(matérias).
      - O professor deve assentir as solicitações de matrículas dos alunos.
      - Uma cadeira não poderá ser ofertada mais de uma vez por período.
      - Um aluno não pode se matricular em mais de 8 cadeiras(matérias) e menos de 1.
      - O sistema deve ser capaz de listar todas as cadeiras e seus alunos matriculados.
      - O sistema deve possuir dois módulos "aluno e professor". Dica: pode ser utilizado o JWT.
      - O sistema deve ser capaz de persistir essas informações em um banco de dados relacional.
   - Adicionar testes unitários
