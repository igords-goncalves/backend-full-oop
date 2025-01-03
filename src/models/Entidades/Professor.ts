import IProfessor from "../../interfaces/IProfessor.ts";
import Usuario from "./Usuario.ts";

export default class Professor extends Usuario implements IProfessor {
  constructor(
    nome: string,
    idade: number,
    email: string,
    private salario: number,
    private especialidade: string,
  ) {
    super(nome, idade, email);
  }

  public receberAumento(value: number): number {
    return this.Salario * value;
  }

  // ==============================

  public get Especialidade(): string {
    return this.especialidade;
  }
  public set Especialidade(value: string) {
    this.especialidade = value;
  }
  public get Salario(): number {
    return this.salario;
  }
  public set Salario(value: number) {
    this.salario = value;
  }
}
