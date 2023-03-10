# Challenge-Backend-brisanet


# Tecnologias
- Node.js
- Express
- Typescript
- Postgres
- Prisma
- Isonmnia
- JWT

# Partes concluidas

-  __Básico__
   - Requisitoas
      - O sistema deve ser capaz de estabelecer uma conexão com um banco de dados Postgres. ✅
      - O sistema deve ser capaz de lidar com requisições com formato de dados do tipo JSON. ✅
      - O sistema deve ser capaz de cadastrar professores, alunos e cadeiras(matérias). ✅
      - O sistema deve ser capaz de persistir essas informações em um banco de dados relacional. ✅
   - Adicionar arquivo de rotas do Insomnia
   - Adicionar migrations ✅
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


# Informações sobre o arquivo Insomnia


## Criando usuarios:
1. O professor e o aluno são criados com URLs diferentes, mas o arquivo Json é o mesmo
2. A __matricula__ do aluno é criada automaticamente
3. As chaves __telefone__ e __cpf__ tem um tamanho máximo de 11 caracteres, elas devem ser inseridas sem qualquer carácter especial

- Criando Professor ou Aluno

```
{
	"nome": "gabriel professor",
	"telefone": "92954013", 
	"email": "prof@gmail.cm",
	"cpf": "05875840332"
}
```

## Login
1. O login do professor e do aluno é com o __cpf__ cadastrado no Banco, e é feito com URLs diferentes

- Login do usuario
```
{
	"cpf": "05875840332"
}
```

2. Ao fazer o login vôce recebera um Json com os dados do usuário e um JWT com nome:  __"token"__, ele será usado nas requisições seguintes
### OBS: As proximas oções a API sempre recebe o ID do usuário pelo Bearer token



# Opções de cada usuário

## Opções do Professor

- Cadastrar nova cadeira

- Listar todas as cadeiras criadas

- Listar cadeiras pendentes de confirmação do professor

- Confirmar matricula do aluno

- Listar cadeiras abertas e alunos matriculados


## Opções do Aluno

- fazer pedido de matricula

- Listar matriculas pendentes

- Listar matriculas abertas











