import Perfil from "../Perfil/Perfil.ts";
import IUsuario from "./interfaces/IUsuario.ts";

export default class Usuario implements IUsuario {
  constructor(
    private _nome: string,
    private _idade: number,
    private _email: string,
    private _perfil: Perfil,
  ) {}

  // Cada método tem sua responsabilidade
  // Algumas validações deverão serem feitas no front-end

  /**
   * @return {string}
   * @memberof Usuario
   *
   * Does not access properties directly,
   * must access through getters and setters
   */
  public apresentar(): string {
    return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`;
  }

  public enviarEmailBoasVindas() {
    console.log(`Bem vindo ao nosso departamento ${this.nome}`);
    return `Email de boas-vindas enviado para ${this.email}`;
  }

  public validarIdade() {
    if (this.idade < 1) {
      return "Idade deve ser uma valor maior que 0";
    }
    return;
  }

  public validarEmail() {
    const emailValidity = new RegExp(
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$",
    );

    if (!emailValidity.exec(this.email)) {
      return "Campo obrigatorio ou email inválido.";
    }
    return;
  }

  private get idade(): number {
    return this._idade;
  }
  private set idade(value: number) {
    this._idade = value;
  }

  private get nome(): string {
    return this._nome;
  }
  private set nome(value: string) {
    this._nome = value;
  }

  public get email(): string {
    return this._email;
  }
  private set email(value: string) {
    // Entenda o que acontece aqui parece
    // que o e-mail de boas vindas
    // deve enviado quando um email é adicionado
    // o que faz sentido de um ponto
    // de vista lógico.
    this._email = value;
    this.enviarEmailBoasVindas();
  }

  private get perfil(): Perfil {
    return this._perfil;
  }
  private set perfil(value: Perfil) {
    this._perfil = value;
  }
}
