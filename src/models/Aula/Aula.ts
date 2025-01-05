import IAula from "../../interfaces/IAula";
import Aluno from "../Usuario/Aluno";
import Professor from "../Usuario/Professor";

export default abstract class Aula implements IAula {
  constructor(
    private nome: string,
    private duracao: number,
    private rating: number,
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

  public get Nome(): string {
    return this.nome;
  }

  public get Duracao(): number {
    return this.duracao;
  }

  public get Rating(): number {
    return this.rating;
  }
}
