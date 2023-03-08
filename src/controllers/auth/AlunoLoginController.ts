import { Request, Response } from "express";
import { AlunoLoginService } from "../../services/auth/AlunoLoginService";

class AlunoLoginController{
    async hunddle(req: Request, res: Response){
        const {cpf} = req.body;

        const alunoLoginService = new AlunoLoginService();
        const login = await alunoLoginService.execute({cpf})

        return res.json(login)
    }
}

export {AlunoLoginController}