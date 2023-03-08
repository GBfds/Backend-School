import prismaClient from "../../prisma";
import {sign} from "jsonwebtoken"

interface AlunoRequest{
    cpf: string
}

class AlunoLoginService{
    async execute({cpf}: AlunoRequest){
        const user = await prismaClient.aluno.findFirst({
            where:{
                cpf: cpf
            }
        })

        if (!user){
            throw new Error("cpf invalido");
        }

        const token = sign({
            nome: user.nome,
            email: user.email,
            matricula: user.matricula
        },
        process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: "30d"

        })

        return{
            id: user.id,
            nome: user.nome,
            email: user.email,
            cpf: user.cpf,
            matricula: user.matricula,
            telefone: user.telefone,
            token: token
        }
    }
}

export {AlunoLoginService}