import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CadastroService } from './cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  @ViewChild('usuarioInput') usuarioInput: ElementRef|undefined;
  @ViewChild('senhaInput') senhaInput: ElementRef|undefined;
  @ViewChild('confSenhaInput') confSenhaInput: ElementRef|undefined;

  login: string='';
  senha: string='';
  confsenha: string='';
  cpf: string = '';
  nome: string = '';

  erroLogin: boolean = false;

  isLoading: boolean = false;

  constructor(
    private router: Router,
    private cadastroService: CadastroService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.erroLogin = false;

    if(this.senhaInput!=this.confSenhaInput){
      this.confSenhaInput?.nativeElement.focus();
      
    }

    if (!form.valid){
      form.controls.usuario.markAllAsTouched();
      form.controls.senha.markAllAsTouched();
      
      if(form.controls.senha.invalid){
        this.senhaInput?.nativeElement.focus();
      }

      return
    }
    
  }
  cadastra(){
    this.isLoading = true;
    
    const credenciais ={
      cpf: this.cpf,
      login: this.login,
      nome: this.nome,
      senha: this.senha
    };
    
    this.cadastroService.cadastrar(credenciais)
      .subscribe(
        response=> this.onSuccessLogin(response),
        error => this.onErrorLogin(error)
      )
  }

}
