import {Router, Request, Response} from "express";

import { CreateProfController } from "./controllers/professores/CreateProfController";

import { CreateAlunoController } from "./controllers/aluno/CreateAlunoController";

import { CreateCadeiraController } from "./controllers/cadeira/CreateCadeiraService";


const router = Router();

router.get("/", (req: Request, res: Response)=>{
    res.json("teste ok")
})

router.post("/professor", new CreateProfController().hundle)

router.post("/aluno", new CreateAlunoController().hundle)

router.post("/cadeira", new CreateCadeiraController().hundle)

export {router}