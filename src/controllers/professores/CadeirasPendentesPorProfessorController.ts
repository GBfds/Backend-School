import { Request, Response } from "express";
import { CadeirasPendentesPorProfessorService } from "../../services/professor/CadeirasPendentesPorProfessorService";

class CadeirasPendentesPorProfessorController{
    async hundle(req: Request, res: Response){
        const id_professor = req.user_id

        const cadeirasAbertas = new CadeirasPendentesPorProfessorService();
        const cadeiras = await cadeirasAbertas.execute({id_professor})

        return res.json(cadeiras)
    }
}

export {CadeirasPendentesPorProfessorController}