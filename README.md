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
      - O professor deve ser capaz de cadastrar uma ou mais cadeiras(matérias). ✅
      - O aluno deve ser capaz de se matricular em uma ou mais cadeiras(matérias). ✅
      - O professor deve assentir as solicitações de matrículas dos alunos. ✅
      - Uma cadeira não poderá ser ofertada mais de uma vez por período.
      - Um aluno não pode se matricular em mais de 8 cadeiras(matérias) e menos de 1.
      - O sistema deve ser capaz de listar todas as cadeiras e seus alunos matriculados. ✅
      - O sistema deve possuir dois módulos "aluno e professor". Dica: pode ser utilizado o JWT. ✅
      - O sistema deve ser capaz de persistir essas informações em um banco de dados relacional. ✅
   - Adicionar testes unitários


# Informações sobre o arquivo Insomnia


## Criando usuarios:
1. O professor e o aluno são criados com URLs diferentes, mas o arquivo Json é o mesmo
2. A __matricula__ do aluno é criada automaticamente
3. As chaves __telefone__ e __cpf__ tem um tamanho máximo de 11 caracteres, elas devem ser inseridas sem qualquer carácter especial

- Criando usuário Professor ou Aluno

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

### OBS: Nas requisições que necessitam do ID do professor ou do aluno não é necessario passa-lo no arquivo JSON, ele já é obtido pelo  _Auth type: Bearer token_


# Opções de cada usuário


## Opções do Professor


- Cadastrar nova cadeira
```
{
	"nome" : "matematica2.0",
	"dt_inicio": "2023-03-10T12:00:00.000Z",
	"dt_fim": "2023-03-13T12:00:00.000Z",
	"carga_horaria" : 150
}
```

- Listar cadeiras pendentes de confirmação do professor
	- Necessario apenas a URL

- Confirmar matricula do aluno
Ao listar as cadeiras pendentes o professor recebera uma lista de objetos e em cada um terá as inforções das cadeiras e um array com nome __cadeiras_pendentes__, dentro dele terá um ID e um objeto com as informações do aluno, esse id é usado para a confirmação da matricula

```
{
	"id_pendencia": "6d4d6a2a-f245-4d36-8748-fb0d8588a2d3"
}
```

- Listar cadeiras abertas e alunos matriculados
	- Necessario apenas a URL


## Opções do Aluno

- fazer pedido de matricula
```
{
	"id_cadeira": "316b28d3-9b2f-400b-8282-3a814fbc07a5"
}
```

- Listar matriculas pendentes
	- Necessario apenas a URL

- Listar matriculas abertas
	- Necessario apenas a URL










