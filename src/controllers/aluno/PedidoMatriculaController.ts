import { Request, Response } from "express";
import { PedidoMatriculaService } from "../../services/aluno/PedidoMatriculaService";

class PedidoMatriculaController{
    async hundle(req: Request, res: Response){
        const {id_cadeira} = req.body
        const id_aluno = req.user_id

        const pedidoMatriculaService = new PedidoMatriculaService();
        const cadeira = await pedidoMatriculaService.execute({
            id_aluno,
            id_cadeira
        })

        return res.json(cadeira)
    }
}

export {PedidoMatriculaController}