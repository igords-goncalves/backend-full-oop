import { Request, Response } from "express";
import Usuario from "../models/Pessoa/Usuario.ts";
import Aula from "../models/Aula/Aula.ts";

type usuario = {
  nome: string;
  idade: number;
  email: string;
  aluno: Usuario;
  professor: Usuario;
};

export default class usuarioController {
  static criarUsuario(req: Request, res: Response) {
    const { nome, idade, email }: usuario = req.body;

    const newUser = new Usuario(nome, idade, email);

    // A lógica que faz as validações está no model
    // só estou utilizando o método
    if (newUser.validarEmail()) {
      res.status(400).json({
        error: true,
        message: newUser.validarEmail(),
      });
      res.end();
    } else if (newUser.validarIdade()) {
      res.status(400).json({
        error: true,
        message: newUser.validarIdade(),
      });
      res.end();
    } else {
      res.status(201).json({
        error: false,
        message: "Usuário adicionado com sucesso.",
        usuario: newUser,
        bio: newUser.apresentar(),
        boasVindas: newUser.enviarEmailBoasVindas(),
      });
    }
  }

  static getUsuarios(req: Request, res: Response) {
    // TODO: Como definir esse usuário mock abaixo diretamente pelo contrutor?
    const user = {
      aluno: {
        nome: "José",
        idade: 55,
        email: "ze@email.com",
      },
      professor: {
        nome: "José",
        idade: 55,
        email: "ze@email.com",
      },
    };

    // Professor cria uma aula
    const newProfessor = new Usuario(
      user.professor.nome,
      user.professor.idade,
      user.professor.email,
    );

    // Aluno assiste uma aula
    const newAluno = new Usuario(
      user.aluno.nome,
      user.aluno.idade,
      user.aluno.email,
    );

    // Uma aula está acontecendo, através da classe relacionada!
    const aulaDeCiencias = new Aula(newAluno, newProfessor);

    return res.status(201).json({
      error: false,
      professor: newProfessor,
      bio: newProfessor.apresentar(),
      boasVindas: newProfessor.enviarEmailBoasVindas(),
      aluno: newAluno,
      agendaLivre: aulaDeCiencias.marcarAula(),
      aulaAprovada: aulaDeCiencias.aprovarAula(),
    });
  }
}
