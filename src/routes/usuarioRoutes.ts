import express from "express";
import usuarioController from "../controllers/usuarioController.ts";
import ProfessorController from "../controllers/professor.controller.ts";
import AlunoController from "../controllers/aluno.controller.ts";
import FuncionarioController from "../controllers/funcionario.controller.ts";

const usuarioRoutes = express.Router();

usuarioRoutes.get("/usuarios", usuarioController.getUsuarios);
usuarioRoutes.post("/criar/aluno", AlunoController.criarAluno);
usuarioRoutes.post("/criar/prof", ProfessorController.criarProfessor);
usuarioRoutes.post("/criar/func", FuncionarioController.criarFuncionario);

export default usuarioRoutes;
