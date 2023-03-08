import prismaClient from "../../prisma";

interface CadeirasRequest{
    id_professor: string
}

class ListCadeirasService{
    async execute({id_professor}:CadeirasRequest){
        const cadeiras = await prismaClient.cadeira.findMany({
            where:{
                id_professor: id_professor
            }
        })

        return cadeiras
    }
}

export {ListCadeirasService}