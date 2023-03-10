import prismaClient from "../../prisma";

interface ConfirmRequest{
    id_pendencia: string;
}

type CadeiraPendente = {
    id: string;
	id_aluno: string;
	id_cadeira: string;
	confirmacao_prof: boolean
}

class ConfirmarMatriculaService{
    async execute({id_pendencia}:ConfirmRequest){

        const exists = await cadeiraExiste({id_pendencia})
        if (!exists){
            throw new Error("id invalido");
        }

        const confirm = true
        const confirmacao = await prismaClient.cadeira_pendente.update({
            data: {
                confirmacao_prof: confirm
            }, where: {
                id: id_pendencia
            }
        }) as CadeiraPendente

        const resposta = await adicionarMatricula(confirmacao.id_cadeira, confirmacao.id_aluno)

        return resposta
    }
}

async function cadeiraExiste({id_pendencia}:ConfirmRequest) {
    const exists = await prismaClient.cadeira_pendente.findFirst({
        where:{
            id: id_pendencia,
            confirmacao_prof: false
        }
    })

    return exists
}

async function adicionarMatricula(id_cadeira : string, id_aluno: string) {
    const resposta = await prismaClient.cadeira_aberta.create({
        data: {
            id_cadeira: id_cadeira,
            id_aluno: id_aluno
        }
    })

    return resposta
}

export {ConfirmarMatriculaService}