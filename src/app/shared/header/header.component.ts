import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string = '';

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  pages = [
    {
      link: 'home',
      text: 'Home'
    },{
      link: 'lancamentos',
      text: 'Lançamentos'
    },{
      link: 'planos-conta',
      text: 'Planos de Contas'
    // },{
    //   link: 'login',
    //   text: 'Login'
    // },{
    //   link: 'cadastro',
    //   text: 'Cadastro'
    }
  ]

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['login'])
  }

}
