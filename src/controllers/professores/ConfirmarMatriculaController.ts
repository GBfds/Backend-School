import { Request, Response } from "express";
import { ConfirmarMatriculaService } from "../../services/professor/ConfirmarMatriculaService";

class ConfirmarMatriculaController{
    async hundle(req: Request, res: Response){
        const {id_pendencia} = req.body;

        const confirmarMatricula = new ConfirmarMatriculaService();
        const confirmacao = await confirmarMatricula.execute({id_pendencia})

        return res.json(confirmacao)
    }
}

export {ConfirmarMatriculaController}