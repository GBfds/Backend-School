import { Request, Response } from "express";
import { ListCadeirasService } from "../../services/cadeira/ListCadeirasService";

class ListCadeirasController{
    async hundle(req: Request, res: Response){

        const listCadeirasService = new ListCadeirasService();
        const cadeiras = await listCadeirasService.execute()

        return res.json(cadeiras)
    }
}

export {ListCadeirasController}