import { Request, Response } from "express";
import { ListCadeirasService } from "../../services/cadeira/ListCadeirasService";

class ListCadeirasController{
    async hundle(req: Request, res: Response){
        const id_professor = req.user_id

        const listCadeirasService = new ListCadeirasService();
        const cadeiras = await listCadeirasService.execute({id_professor})

        return res.json(cadeiras)
    }
}

export {ListCadeirasController}