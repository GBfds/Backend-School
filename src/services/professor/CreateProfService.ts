import prismaClient from "../../prisma";

interface ReqProf{
    nome: string;
    telefone: string;
    email: string;
    cpf: string;
}

class CreateProfService{
    async execute({nome, telefone, email, cpf}: ReqProf){
        const checkCpf = await prismaClient.professor.findFirst({
            where:{
                cpf: cpf
            }
        })

        if (checkCpf){
            throw new Error("cpf já cadastrado");
        }

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