import {Request, Response} from "express";
import { CreateAlunoService } from "../../services/aluno/CreateAlunoService";

class CreateAlunoController{
    async hundle(req: Request, res: Response){
        const {nome, telefone, email, cpf} = req.body
        const matricula = "876181"

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