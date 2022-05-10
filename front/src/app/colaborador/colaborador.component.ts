import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../colaborador.service';
import { Colaborador } from './Colaborador';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent implements OnInit {

  constructor(private servico:ColaboradorService) { }

  vetor:Colaborador[] = [];
  codigo:number = -1;
  nome:string = '';
  sobrenome:string = '';
  colaboradorSelecionado:boolean = false;

  ngOnInit(): void {
    this.obterColaboradores();
  }

  // SELECIONAR TODOS OS COLABORADORES
  obterColaboradores = () => {
    this.servico.selecionarColaboradores()
    .subscribe(retorno => {this.vetor = retorno});
  }

  // CADASTRAR COLABORADORES
  cadastrar = () => {
    let obj = {
      "nome" : this.nome,
      "sobrenome" : this.sobrenome
    }

    this.servico.cadastrarColaborador(obj)
    .subscribe(retorno => {this.vetor.push(retorno)})
    
    this.nome = '';
    this.sobrenome = '';
  }

  // SELECIONAR COLABORADOR ESPECÍFICO
  selecionar = (indice:number) => {
    this.nome = this.vetor[indice].nome;
    this.sobrenome = this.vetor[indice].sobrenome;
    this.codigo = this.vetor[indice].codigo || -1;

    this.colaboradorSelecionado = true;
  }

  // REMOVER COLABORADORE
  excluir = () => {
    this.servico.removerColaborador(this.codigo)
    .subscribe()
    
    this.nome = '';
    this.sobrenome = '';
    this.colaboradorSelecionado = false;

    this.obterColaboradores();
  }

  // ALTERAR COLABORADOR
  alterar = () => {
    let obj = {
      "codigo" : this.codigo,
      "nome" : this.nome,
      "sobrenome" : this.sobrenome
    }

    this.servico.alterarColaborador(obj)
    .subscribe()
    
    this.nome = '';
    this.sobrenome = '';
    this.colaboradorSelecionado = false;

    this.obterColaboradores();
  }

}
