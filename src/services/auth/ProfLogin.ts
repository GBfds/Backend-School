import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

interface AuthProfRequest{
    cpf: string
}

class ProfLoginService{
    async execute({cpf}: AuthProfRequest){
        const user = await prismaClient.professor.findFirst({
            where:{
                cpf: cpf
            }
        })

        if (!user){
            throw new Error("cpf invalido")
        }

        const token = sign({
            nome: user.nome,
            email: user.email
        }, 
        process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: "30d"
        }
        )

        return{
            id: user.id,
            nome: user.nome,
            email: user.email,
            cpf: user.cpf,
            telefone: user.telefone,
            token: token
        }
    }
}

export {ProfLoginService}