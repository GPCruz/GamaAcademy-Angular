import { Conta } from '../shared/interfaces/conta.interface';
import { Usuario } from '../shared/interfaces/usuario.interface';

export interface CadastroCredenciais {
    login: string,
    senha: string,
    cpf: string,
    nome: string
}

export interface CadastroResponse {
    conta: Conta,
    contaCredito: Conta,
    dataFim: Date;
    dataInicio: Date;
    token: string;
    usuario: Usuario;
  } 
  