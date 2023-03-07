import {Request, Response} from "express";
import { CreateAlunoService } from "../../services/aluno/CreateAlunoService";

class CreateAlunoController{
    async hundle(req: Request, res: Response){
        const {nome, telefone, email, cpf} = req.body
        const split = cpf.split("",4)
        
        while (split.length < 8){
            let ramdon = Math.floor(Math.random() * 9)
            split.push(ramdon)
        }
        const matricula = split.join("")

        const createAlunoService = new CreateAlunoService();
        const newAluno = await createAlunoService.execute({
            nome,
            telefone,
            email,
            cpf,
            matricula
        })

        return res.json(newAluno)
    }
}

export {CreateAlunoController}