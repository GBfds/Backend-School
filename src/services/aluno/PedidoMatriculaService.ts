import prismaClient from "../../prisma";

interface PedidoMatriculaRequest{
    id_aluno: string;
    id_cadeira: string;
}

type CadeiraResponse ={
    id: string;
    nome: string;
    slug: string;
    dt_inicio: Date;
    dt_fim: Date;
    carga_horaria: number;
    id_professor: string;
}

class PedidoMatriculaService{
    async execute({id_aluno, id_cadeira}:PedidoMatriculaRequest){
        const checkmatr = await prismaClient.cadeira_pendente.findFirst({
            where:{
                id_aluno: id_aluno,
                id_cadeira: id_cadeira
            }
        })

        if (checkmatr){
            throw new Error("Pedido de matricula já existente");
        }

        const verify = await verifyTempo(id_cadeira)
        if (!verify){
            throw new Error("data de inscrição invalida");
        }
        const pedido = await prismaClient.cadeira_pendente.create({
            data:{
                id_aluno: id_aluno,
                id_cadeira: id_cadeira
            }
        })

        return pedido
    }
}

async function verifyTempo(id_cadeira: string) {
    const cadeira = await prismaClient.cadeira.findFirst({
        where:{
            id: id_cadeira
        }
    }) as CadeiraResponse

    var DateNow = new Date()

    if (DateNow > cadeira.dt_inicio && DateNow < cadeira.dt_fim){
        return true
    } else {
        return false
    }

}

export {PedidoMatriculaService}