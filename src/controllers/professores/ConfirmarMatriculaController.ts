import { Request, Response } from "express";
import { ConfirmarMatriculaService } from "../../services/professor/ConfirmarMatriculaService";

class ConfirmarMatriculaController{
    async hundle(req: Request, res: Response){
        const {id_cadeira} = req.body;

        const confirmarMatricula = new ConfirmarMatriculaService();
        const confirmacao = await confirmarMatricula.execute({id_cadeira})

        return res.json(confirmacao)
    }
}

export {ConfirmarMatriculaController}