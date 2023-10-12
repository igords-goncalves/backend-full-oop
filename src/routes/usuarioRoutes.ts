import express from "express";
import usuarioController from "../controllers/usuarioController.ts";

const usuarioRoutes = express.Router();

usuarioRoutes.post("/usuarios", usuarioController.apresentarUsuario);

export default usuarioRoutes;
