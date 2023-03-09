import prismaClient from "../../prisma";

interface CadeirasRequest{
    id_professor: string
}

class CadeirasPendentesPorProfessorService{
    async execute({id_professor}:CadeirasRequest){
        const cadeiras = await prismaClient.cadeira.findMany({
            where:{
                id_professor: id_professor
            }, include:{
                cadeiras_pendentes:{
                    where:{
                        confirmacao_prof: false
                    }
                }
            }
        })

        return cadeiras
    }
}

export {CadeirasPendentesPorProfessorService}