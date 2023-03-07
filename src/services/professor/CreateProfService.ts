import prismaClient from "../../prisma";

interface ReqProf{
    nome: string;
    telefone: string;
    email: string;
    cpf: string;
}

class CreateProfService{
    async execute({nome, telefone, email, cpf}: ReqProf){
        const newProf = await prismaClient.professor.create({
            data: {
                nome: nome,
                telefone: telefone,
                email: email,
                cpf: cpf
            }
        }) 

        return newProf;
    }
}

export {CreateProfService}