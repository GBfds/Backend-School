import {Router} from "express";
import { profAuthenticated } from "./middlewares/ProfAuthenticated";
import { AlunoAuthenticated } from "./middlewares/AlunoAuthenticated";

import { ProfLoginController } from "./controllers/auth/ProfLogin";
import { AlunoLoginController } from "./controllers/auth/AlunoLoginController";

import { CreateProfController } from "./controllers/professores/CreateProfController";
import { CadeirasAbertasPorProfessorController } from "./controllers/professores/CadeirasAbertasPorProfessorController";
import { CadeirasPendentesPorProfessorController } from "./controllers/professores/CadeirasPendentesPorProfessorController";
import { ConfirmarMatriculaController } from "./controllers/professores/ConfirmarMatriculaController";

import { CreateAlunoController } from "./controllers/aluno/CreateAlunoController";
import { PedidoMatriculaController } from "./controllers/aluno/PedidoMatriculaController";

import { CreateCadeiraController } from "./controllers/cadeira/CreateCadeiraService";
import { ListCadeirasController } from "./controllers/cadeira/ListCadeirascontroller";


const router = Router();

router.post("/login/prof", new ProfLoginController().hundle)
router.post("/login/aluno", new AlunoLoginController().hunddle)

router.post("/professor", new CreateProfController().hundle)
router.get("/prof/cadeiras/abertas", profAuthenticated, new CadeirasAbertasPorProfessorController().hundle)
router.get("/prof/cadeiras/pendentes", profAuthenticated, new CadeirasPendentesPorProfessorController().hundle)
router.put("/confirmar/matricula", profAuthenticated, new ConfirmarMatriculaController().hundle)

router.post("/aluno", new CreateAlunoController().hundle)
router.post("/matricula", AlunoAuthenticated, new PedidoMatriculaController().hundle)

router.post("/cadeira",profAuthenticated, new CreateCadeiraController().hundle)
router.get("/cadeiras", new ListCadeirasController().hundle)

export {router}