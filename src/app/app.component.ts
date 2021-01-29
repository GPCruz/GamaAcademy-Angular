import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minha-aplicacao';
  somar(n1: number, n2: number){
    return n1 + n2;
  }
}
