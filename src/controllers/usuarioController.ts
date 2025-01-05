import { Request, Response } from "express";
import Aluno from "../models/Usuario/Aluno.ts";
import Professor from "../models/Usuario/Professor.ts";
import Funcionario from "../models/Usuario/Funcionario.ts";
import USER from "../constants/USER.ts";
import Ciencias from "../models/Aula/Ciencias.ts";

//TODO: Porque eu decidi utiliza o método static nos controllers?
export default class usuarioController {
  static getUsuarios(req: Request, res: Response) {
    const professor = new Professor(
      USER.professor.nome,
      USER.professor.idade,
      USER.professor.email,
      USER.professor.salario,
      USER.professor.especialidade,
    );

    const aluno = new Aluno(
      USER.aluno.nome,
      USER.aluno.idade,
      USER.aluno.email,
      USER.aluno.matricula,
      USER.aluno.curso,
    );

    const funcionario = new Funcionario(
      USER.funcionario.nome,
      USER.funcionario.idade,
      USER.funcionario.email,
      USER.funcionario.setor,
      USER.funcionario.trabalhando,
    );

    // Aula de ciências pode ser uma classe filha de Aula que pode ser uma classe abstrata;
    const aulaDeCiencias = new Ciencias(
      "Tabela periodica",
      3,
      4,
      aluno,
      professor,
    );

    const data = {
      error: false,
      professor: professor,
      aluno: aluno,
      funcionario: funcionario,
      apresentar: professor.apresentar(),
      nome_aula: aulaDeCiencias.Nome,
      aula: aulaDeCiencias.marcarAula(),
      aulaAprovada: aulaDeCiencias.aprovarAula(),
      aumentoProfessor: professor.receberAumento(5.5),
    };

    return res.status(201).json({ data: data });
  }
}
