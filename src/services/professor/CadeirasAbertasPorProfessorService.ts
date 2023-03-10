import prismaClient from "../../prisma";

interface CadeirasRequest{
    id_professor: string
}

class CadeirasAbertasPorProfessorService{
    async execute({id_professor}:CadeirasRequest){
        const cadeiras = await prismaClient.cadeira.findMany({
            where:{
                id_professor: id_professor
            }, include:{
                cadeiras_abertas: {
                    select: {
                        id: true,
                        aluno: true
                    }
                }
            }
        })

        return cadeiras
    }
}

export {CadeirasAbertasPorProfessorService}