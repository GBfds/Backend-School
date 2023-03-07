import {Request, Response} from "express";
import {CreateProfService} from "../../services/professor/CreateProfService"

class CreateProfController{
    async hundle(req: Request, res: Response){
        const {nome, telefone, email, cpf} = req.body

        const createProfService = new CreateProfService();
        const newProf = await createProfService.execute({
            nome,
            telefone,
            email,
            cpf
        })

        return res.json(newProf)
    }
}

export {CreateProfController}