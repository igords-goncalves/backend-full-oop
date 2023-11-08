import IAula from "../../interfaces/IAula";
import Aluno from "../Entidades/Aluno";
import Professor from "../Entidades/Professor";

export default class Aula implements IAula {
  constructor(
    private aluno: Aluno,
    private professor: Professor,
  ) {}

  public marcarAula(): boolean {
    if (!this.aluno || !this.professor) return false;
    return true;
  }
  public aprovarAula(): boolean {
    if (!this.professor) return false;
    return true;
  }
}
