import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AuthService } from '../shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  API_URL = environment.API_URL

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }
  
  cadastrar(credenciais: LoginCredenciais): Observable<LoginResponse>{
    return this.http.post<LoginResponse>( this.API_URL + 'login', credenciais)
     .pipe(
       tap(response=>{
         this.auth.setUsuario(response.usuario);
         this.auth.setToken(response.token);
       })
     );
  }
}
