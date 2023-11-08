import { Request, Response } from "express";
import Aula from "../models/Aula/Aula.ts";
import Aluno from "../models/Entidades/Aluno.ts";
import Professor from "../models/Entidades/Professor.ts";
import Funcionario from "../models/Entidades/Funcionario.ts";

type usuarios = {
  nome: string;
  idade: number;
  email: string;
  matricula: number;
  curso: string;
  salario: number;
  especialidade: string;
  setor: string;
  trabalhando: boolean;
};

export default class usuarioController {
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

    return res.status(201).json({
      error: false,
      message: "Aluno adicionado com sucesso.",
      aluno: aluno,
      bio: aluno.apresentar(),
      boasVindas: aluno.enviarEmailBoasVindas(),
    });
  }

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

  static getUsuarios(req: Request, res: Response) {
    const user = {
      aluno: {
        nome: "Naldo",
        idade: 23,
        email: "naldo@email.com",
        matricula: 123456,
        curso: "Engenharia",
      },
      professor: {
        nome: "José",
        idade: 55,
        email: "ze@email.com",
        salario: 5000,
        especialidade: "Matemática",
      },
      funcionario: {
        nome: "Ana",
        idade: 32,
        email: "ana@email.com",
        setor: "Financeiro",
        trabalhando: true,
      },
    };

    const professor = new Professor(
      user.professor.nome,
      user.professor.idade,
      user.professor.email,
      user.professor.salario,
      user.professor.especialidade,
    );

    const aluno = new Aluno(
      user.aluno.nome,
      user.aluno.idade,
      user.aluno.email,
      user.aluno.matricula,
      user.aluno.curso,
    );

    const funcionario = new Funcionario(
      user.funcionario.nome,
      user.funcionario.idade,
      user.funcionario.email,
      user.funcionario.setor,
      user.funcionario.trabalhando,
    );

    const aulaDeCiencias = new Aula(aluno, professor);

    return res.status(201).json({
      error: false,
      professor: professor,
      aluno: aluno,
      funcionario: funcionario,
      aula: aulaDeCiencias.marcarAula(),
      aulaAprovada: aulaDeCiencias.aprovarAula(),
      aumentoProfessor: professor.receberAumento(5.5),
    });
  }
}
