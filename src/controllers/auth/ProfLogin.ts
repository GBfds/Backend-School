import { ProfLoginService } from "../../services/auth/profLogin";
import { Request, Response } from "express";

class ProfLoginController{
    async hundle(req: Request,res: Response){
        const {cpf} = req.body;

        const profLoginService = new ProfLoginService();

        const login = await profLoginService.execute({cpf})

        return res.json(login)
    }
}

export {ProfLoginController}