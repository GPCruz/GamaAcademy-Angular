import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Erro404Component } from './erro404/erro404.component';
import { HomeComponent } from './home/home.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { LoginComponent } from './login/login.component';
import { PlanosContaComponent } from './planos-conta/planos-conta.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado/esta-logado.guard';
import { NaoLogouGuard } from './shared/guards/nao-logou/nao-logou.guard';

const routes: Routes = [{
  path: '',
  component: AreaLogadaComponent,
  canActivate:[EstaLogadoGuard],
  children: [{
    path: 'home',
    component: HomeComponent
  },{
    path: 'planos-conta',
    component: PlanosContaComponent
  },{
    path: 'lancamentos',
    component: LancamentosComponent
  },{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }]
},{
  path: 'login',
  component: LoginComponent,
  canActivate:[NaoLogouGuard]
},{
  path: 'cadastro',
  component: CadastroComponent,
  canActivate:[NaoLogouGuard]
},{
  path: '**',
  component: Erro404Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
