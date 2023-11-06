import express from "express";
import usuarioController from "../controllers/usuarioController.ts";

const usuarioRoutes = express.Router();

usuarioRoutes.get("/usuarios", usuarioController.getUsuarios);
usuarioRoutes.post("/criar", usuarioController.criarUsuario);

export default usuarioRoutes;
