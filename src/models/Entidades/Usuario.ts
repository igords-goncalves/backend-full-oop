import IUsuario from "../../interfaces/IUsuario.ts";

export default abstract class Usuario implements IUsuario {
  constructor(
    private nome: string,
    private idade: number,
    private email: string,
  ) {}

  /**
   * @return {string}
   * @memberof Usuario
   *
   * Does not access properties directly,
   * must access through getters and setters
   */
  public apresentar(): string {
    return `Olá, eu sou ${this.Nome} e tenho ${this.Idade} anos.`;
  }

  public enviarEmailBoasVindas() {
    console.log(`Bem vindo ao nosso departamento ${this.Nome}`);
    return `Email de boas-vindas enviado para ${this.Email}`;
  }

  public validarIdade() {
    if (!this.Idade || this.Idade < 1) {
      return "Idade deve ser uma valor maior que 0";
    }
    return;
  }

  public validarEmail() {
    const emailValidity = new RegExp(
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$",
    );

    if (!emailValidity.exec(this.Email)) {
      return "Campo obrigatorio ou email inválido.";
    }
    return;
  }

  private get Idade(): number {
    return this.idade;
  }
  private set Idade(value: number) {
    this.idade = value;
    this.validarIdade();
  }

  protected get Nome(): string {
    return this.nome;
  }
  protected set Nome(value: string) {
    this.nome = value;
  }

  public get Email(): string {
    return this.email;
  }
  private set Email(value: string) {
    // O envio de e-mail vem depois que o e-mail é definido
    this.email = value;
    this.enviarEmailBoasVindas();
  }
}
