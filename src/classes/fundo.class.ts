export class Fundo {
  fundosId: number;
  tipoPlano: string;
  SUSEP: string;
  nomeSeguradora: string;
  cnpjSeguradora: string;
  nomeFundo: string;
  cnpjFundo: string;

  constructor({
    fundosId,
    tipoPlano,
    SUSEP,
    nomeSeguradora,
    cnpjSeguradora,
    nomeFundo,
    cnpjFundo
  }: Fundo) {
    this.fundosId = fundosId;
    this.tipoPlano = tipoPlano;
    this.SUSEP = SUSEP;
    this.nomeSeguradora = nomeSeguradora;
    this.cnpjSeguradora = cnpjSeguradora;
    this.nomeFundo = nomeFundo;
    this.cnpjFundo = cnpjFundo;
  }
}
