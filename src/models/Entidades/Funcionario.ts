import IFuncionario from "../../interfaces/IFuncionario.ts";
import Usuario from "./Usuario.ts";

export default class Funcionario extends Usuario implements IFuncionario {
  constructor(
    nome: string,
    idade: number,
    email: string,
    private setor: string,
    private trabalhando: boolean,
  ) {
    super(nome, idade, email);
  }

  public mudarTrabalho(): string {
    if (this.Trabalhando) {
      this.Trabalhando = false;
      return `O funcionário ${this.Nome} está de folga`;
    }
    this.Trabalhando = true;
    return `O funcionário ${this.Nome} está trabalhando`;
  }

  public get Trabalhando(): boolean {
    return this.trabalhando;
  }
  public set Trabalhando(value: boolean) {
    this.trabalhando = value;
  }
  public get Setor(): string {
    return this.setor;
  }
  public set Setor(value: string) {
    this.setor = value;
  }
}
