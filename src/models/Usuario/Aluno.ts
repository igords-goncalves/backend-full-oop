import IAluno from "../../interfaces/IAluno.ts";
import Usuario from "./Usuario.ts";

export default class Aluno extends Usuario implements IAluno {
  constructor(
    nome: string,
    idade: number,
    email: string,
    private matricula: number,
    private curso: string,
  ) {
    super(nome, idade, email);
  }

  public cancelarMatricula(): boolean {
    console.log(`Matrícula ${this.Matricula} cancelada com sucesso!`);
    return true;
  }

  // ==============================

  public get Curso(): string {
    return this.curso;
  }
  public set Curso(value: string) {
    this.curso = value;
  }
  public get Matricula(): number {
    return this.matricula;
  }
  public set Matricula(value: number) {
    this.matricula = value;
  }
}
