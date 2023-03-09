import { Request, Response } from "express";
import { CadeirasAbertasPorProfessorService } from "../../services/professor/CadeirasAbertasPorProfessorService";

class CadeirasAbertasPorProfessorController{
    async hundle(req: Request, res: Response){
        const id_professor = req.user_id

        const cadeirasAbertas = new CadeirasAbertasPorProfessorService();
        const cadeiras = await cadeirasAbertas.execute({id_professor})

        return res.json(cadeiras)
    }
}

export {CadeirasAbertasPorProfessorController}