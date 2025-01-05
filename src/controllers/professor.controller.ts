import { Request, Response } from "express";
import Professor from "../models/Usuario/Professor.ts";
import { usuarios } from "../types/usuario.ts";
export default class ProfessorController {
  static criarProfessor(req: Request, res: Response) {
    const { nome, idade, email, salario, especialidade }: usuarios = req.body;
    const professor = new Professor(nome, idade, email, salario, especialidade);

    if (professor.validarEmail()) {
      res.status(400).json({
        error: true,
        message: professor.validarEmail(),
      });
      return res.end();
    }

    if (professor.validarIdade()) {
      res.status(400).json({
        error: true,
        message: professor.validarIdade(),
      });
      return res.end();
    }

    return res.status(201).json({
      error: false,
      message: "Professor adicionado com sucesso.",
      professor: professor,
      bio: professor.apresentar(),
      boasVindas: professor.enviarEmailBoasVindas(),
    });
  }
}
