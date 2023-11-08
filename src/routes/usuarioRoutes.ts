import express from "express";
import usuarioController from "../controllers/usuarioController.ts";

const usuarioRoutes = express.Router();

usuarioRoutes.get("/usuarios", usuarioController.getUsuarios);
usuarioRoutes.post("/criar/aluno", usuarioController.criarAluno);
usuarioRoutes.post("/criar/prof", usuarioController.criarProfessor);
usuarioRoutes.post("/criar/func", usuarioController.criarFuncionario);

export default usuarioRoutes;
