import { Request, Response } from "express";
import Usuario from "../models/Pessoa/Usuario.ts";
import Perfil from "../models/Perfil/Perfil.ts";

type usuario = {
  nome: string;
  idade: number;
  email: string;
  descricao: string;
  nivelDeAcesso: string;
};

export default class usuarioController {
  static criarUsuario(req: Request, res: Response) {
    const { nome, idade, email, descricao, nivelDeAcesso }: usuario = req.body;

    const perfil = new Perfil(descricao, nivelDeAcesso);
    const newUser = new Usuario(nome, idade, email, perfil);

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
      nome: "José",
      idade: 55,
      email: "ze@email.com",
      perfil: {
        descricao: "diretor",
        nivelDeAcesso: "admin",
      },
    };

    const descricao = user.perfil.descricao;
    const nivelDeAcesso = user.perfil.nivelDeAcesso;
    const perfil = new Perfil(descricao, nivelDeAcesso);
    const newUsuario = new Usuario(user.nome, user.idade, user.email, perfil);

    return res.status(201).json({
      error: false,
      usuario: newUsuario,
      bio: newUsuario.apresentar(),
      boasVindas: newUsuario.enviarEmailBoasVindas(),
    });
  }
}
