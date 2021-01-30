import { Component, OnInit } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent implements OnInit {

  show = true;

  IMG_PREFIX ='https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';

  MEMES_GROUP = MEMES_AGRUPADOS_POR_CATEGORIA;

  frutas=[
    'Abacaxi',
    'Laranja',
    'Maçã',
    'Uva'
  ]

  classCSS = 'verde';
  tsizeCSS = 'fonte-grande'

  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(){
    this.show = !this.show;
  }

  colorSwitch(){
    this.classCSS = this.classCSS==='verde'?'vermelho':'verde'
    this.tsizeCSS = this.tsizeCSS===''?'fonte-grande':''
  }

}
