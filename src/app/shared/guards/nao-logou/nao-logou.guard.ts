import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NaoLogouGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ){ }

  canActivate(): boolean{
    
    const estaLogado = this.auth.estaLogado();
      
    if(!estaLogado) {
      return true;
    }

    this.router.navigate(['home'])
    return false;
  }
  
}
