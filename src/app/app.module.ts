import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePT from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Erro404Component } from './erro404/erro404.component';
import { HomeComponent } from './home/home.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { LoginComponent } from './login/login.component';
import { PlanosContaComponent } from './planos-conta/planos-conta.component';
import { ContadorComponent } from './shared/contador/contador.component';
import { DataBindingComponent } from './shared/data-bind/data-bind.component';
import { ExDataBindingComponent } from './shared/ex-data-binding/ex-data-binding.component';
import { ExercicioDiretivasComponent } from './shared/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioPipesComponent } from './shared/exercicio-pipes/exercicio-pipes.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

registerLocaleData(localePT, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContadorComponent,
    DataBindingComponent,
    ExDataBindingComponent,
    ExercicioDiretivasComponent,
    ExercicioPipesComponent,
    LoginComponent,
    PlanosContaComponent,
    CadastroComponent,
    HomeComponent,
    LancamentosComponent,
    Erro404Component,
    AreaLogadaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  },{
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
