import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginResponse } from './login.interfaces';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  @ViewChild('usuarioInput') usuarioInput: ElementRef|undefined;
  @ViewChild('senhaInput') senhaInput: ElementRef|undefined;

  usuario: string='';
  senha: string='';

  erroLogin: boolean = false;

  isLoading: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  onSubmit(form: NgForm) {
    this.erroLogin = false;

    if (!form.valid){
      form.controls.usuario.markAllAsTouched();
      form.controls.senha.markAllAsTouched();

      if(form.controls.usuario.invalid){
        this.usuarioInput?.nativeElement.focus();
      }
      
      if(form.controls.senha.invalid){
        this.senhaInput?.nativeElement.focus();
      }

      return
    }
    
    this.login();
    
  }
  
  exibeErro( nomeControle: string, form: NgForm){
    if(!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

  login(){
    this.isLoading = true;
    
    const credenciais ={
      usuario: this.usuario,
      senha: this.senha
    };
    
    this.loginService.logar(credenciais)
      .subscribe(
        response=> this.onSuccessLogin(response),
        error => this.onErrorLogin(error)
      )
  }

  onSuccessLogin(response: LoginResponse){
    this.router.navigate(['home']);
  }
  onErrorLogin(error: any){
    this.erroLogin = true;
    this.isLoading = false;
  }

}
