import { Request, Response } from "express";
import Aluno from "../models/Usuario/Aluno.ts";
import { usuarios } from "../types/usuario.ts";
export default class AlunoController {
  static criarAluno(req: Request, res: Response) {
    const { nome, idade, email, matricula, curso }: usuarios = req.body;

    const aluno = new Aluno(nome, idade, email, matricula, curso);
    if (aluno.validarEmail()) {
      res.status(400).json({
        error: true,
        message: aluno.validarEmail(),
      });
      return res.end();
    }

    if (aluno.validarIdade()) {
      res.status(400).json({
        error: true,
        message: aluno.validarIdade(),
      });
    }

    return res.status(201).json({
      error: false,
      message: "Aluno adicionado com sucesso.",
      aluno: aluno,
      bio: aluno.apresentar(),
      boasVindas: aluno.enviarEmailBoasVindas(),
    });
  }
}
