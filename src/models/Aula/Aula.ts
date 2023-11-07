import Usuario from "../Pessoa/Usuario";
import IAula from "../../interfaces/IAula";

export default class Aula implements IAula {
  constructor(
    private aluno: Usuario,
    private professor: Usuario,
  ) {}

  public marcarAula(): boolean {
    if (!this.Aluno || !this.Professor) return false;
    return true;
  }
  public aprovarAula(): boolean {
    if (!this.professor) return false;
    return true;
  }

  public get Professor(): Usuario {
    return this.professor;
  }
  public set Professor(value: Usuario) {
    this.professor = value;
  }
  public get Aluno(): Usuario {
    return this.aluno;
  }
  public set Aluno(value: Usuario) {
    this.aluno = value;
  }
}
