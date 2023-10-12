import { Request, Response } from "express";
import Usuario from "../models/Pessoa/Usuario.ts";
import Perfil from "../models/Perfil/Perfil.ts";

type usuario = {
  nome: string;
  idade: number;
  email: string;
  descricao: string;
  nivelDeAcesso: number;
};

export default class usuarioController {
  static apresentarUsuario(req: Request, res: Response) {
    const { nome, idade, email, descricao, nivelDeAcesso }: usuario = req.body;

    const perfil = new Perfil(descricao, nivelDeAcesso);
    const newUser = new Usuario(nome, idade, email, perfil);

    // A lógica que faz as validações está em outro lugar
    if (newUser.validarEmail()) {
      res.status(400).json({
        error: true,
        message: newUser.validarEmail(),
      });
      res.end();
    }

    if (newUser.validarIdade()) {
      res.status(400).json({
        error: true,
        message: newUser.validarIdade(),
      });
      res.end();
    }

    res.status(201).json({
      message: "Usuário adicionado com sucesso.",
      usuario: newUser,
      apresentacao: newUser.apresentar(),
      email: newUser.enviarEmailBoasVindas(),
    });
  }

  static getUsuarios(req: Request, res: Response) {
    const user = {
      nome: "José",
      idade: 55,
      email: "ze@email.com",
      perfil: {
        descricao: "Diretor",
        nivelDeAcesso: 10,
      },
    };
    // TODO: Como definir esse usuário acima diretamente pelo contrutor?
    const perfil = new Perfil(user.perfil.descricao, user.perfil.nivelDeAcesso);
    const newUsuario = new Usuario(user.nome, user.idade, user.email, perfil);

    return res.status(201).json({
      error: false,
      usuario: newUsuario,
      apresentacao: newUsuario.apresentar(),
      email: newUsuario.enviarEmailBoasVindas(),
    });
  }
}
