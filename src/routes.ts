import {Router} from "express";
import { profAuthenticated } from "./middlewares/ProfAuthenticated";

import { ProfLoginController } from "./controllers/auth/ProfLogin";
import { AlunoLoginController } from "./controllers/auth/AlunoLoginController";

import { CreateProfController } from "./controllers/professores/CreateProfController";

import { CreateAlunoController } from "./controllers/aluno/CreateAlunoController";

import { CreateCadeiraController } from "./controllers/cadeira/CreateCadeiraService";
import { ListCadeirasController } from "./controllers/cadeira/ListCadeirascontroller";


const router = Router();

router.post("/login/prof", new ProfLoginController().hundle)
router.post("/login/aluno", new AlunoLoginController().hunddle)

router.post("/professor", new CreateProfController().hundle)

router.post("/aluno", new CreateAlunoController().hundle)

router.post("/cadeira",profAuthenticated, new CreateCadeiraController().hundle)
router.get("/cadeiras", profAuthenticated, new ListCadeirasController().hundle)

export {router}