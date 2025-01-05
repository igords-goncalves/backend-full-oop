import Aluno from "../Usuario/Aluno";
import Professor from "../Usuario/Professor";
import Aula from "./Aula.ts";

export default class Ciencias extends Aula {
  constructor(
    nome: string,
    duracao: number,
    rating: number,
    aluno: Aluno,
    professor: Professor,
  ) {
    super(nome, duracao, rating, aluno, professor);
  }
}
