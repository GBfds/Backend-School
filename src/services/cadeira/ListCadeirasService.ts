import prismaClient from "../../prisma";

class ListCadeirasService{
    async execute(){
        const cadeiras = await prismaClient.cadeira.findMany()

        return cadeiras
    }
}

export {ListCadeirasService}