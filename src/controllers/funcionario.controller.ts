import { Request, Response } from "express";
import Funcionario from "../models/Usuario/Funcionario.ts";
import { usuarios } from "../types/usuario.ts";

export default class FuncionarioController {
  static criarFuncionario(req: Request, res: Response) {
    const { nome, idade, email, setor, trabalhando }: usuarios = req.body;
    const funcionario = new Funcionario(nome, idade, email, setor, trabalhando);

    if (funcionario.validarIdade()) {
      res.status(400).json({
        error: true,
        message: funcionario.validarIdade(),
      });
      return res.end();
    }

    return res.status(201).json({
      error: false,
      message: "Funcionário adicionado com sucesso.",
      funcionario: funcionario,
      bio: funcionario.apresentar(),
      boasVindas: funcionario.enviarEmailBoasVindas(),
    });
  }
}
