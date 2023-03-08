import { Request, Response } from "express";
import { CreateCadeiraService } from "../../services/cadeira/CreateCadeiraService";

class CreateCadeiraController{
    async hundle(req: Request, res: Response){
        const {nome, dt_inicio, dt_fim, carga_horaria} = req.body
        const slug = "exemplo1"
        const id_professor = req.user_id
        const createCadeiraService = new CreateCadeiraService();

        const newCadeira = await createCadeiraService.execute({
            nome,
            slug,
            dt_inicio,
            dt_fim,
            carga_horaria,
            id_professor
        })

        return res.json(newCadeira)
    }
}

export {CreateCadeiraController}