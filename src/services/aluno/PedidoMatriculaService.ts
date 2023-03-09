import prismaClient from "../../prisma";

interface PedidoMatriculaRequest{
    id_aluno: string;
    id_cadeira: string;
}

class PedidoMatriculaService{
    async execute({id_aluno, id_cadeira}:PedidoMatriculaRequest){
        const pedido = await prismaClient.cadeira_pendente.create({
            data:{
                id_aluno: id_aluno,
                id_cadeira: id_cadeira
            }
        })

        return pedido
    }
}

export {PedidoMatriculaService}