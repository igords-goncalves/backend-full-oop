import Perfil from "../Perfil/Perfil.ts";
import IUsuario from "./interfaces/IUsuario.ts";

export default class Usuario implements IUsuario {
  constructor(
    private _nome: string,
    private _idade: number,
    private _email: string,
    private perfil: Perfil,
  ) {
    this.nome = "Agenor";
    this.idade = 55;
  }

  //Cada método tem sua responsabilidade

  /**
   * @return {string}
   * @memberof Usuario
   *
   * Does not access properties directly,
   * must access through getters and setters
   */
  public apresentar(): string {
    return `Ola, eu sou ${this.nome} e tenho idade ${this.idade} anos. 
    E sou um ${this.perfil.descricao}.`;
  }

  public enviarEmailBoasVindas() {
    return `Email de boas-vindas enviado para ${this.email}`;
  }

  public validarIdade() {
    if (this.idade < 0) {
      return `Idade inválida!`;
    }
    return;
  }

  public validarEmail() {
    const emailValidity = new RegExp(
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$",
    );

    if (!emailValidity.exec(this.email)) {
      return "Email inválido.";
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
    // Entenda o que acontece aqui
    // parece que o e-mail de boas vindas
    // é criado quando ao setarmos o email
    // faz sentido essa lógica ser privada
    this._email = value;
    this.enviarEmailBoasVindas();
  }
}
