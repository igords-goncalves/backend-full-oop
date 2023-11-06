export default interface IUsuario {
  apresentar(): string;
  enviarEmailBoasVindas(): string;
  validarIdade(): string | undefined;
  validarEmail(): string | undefined;
}
