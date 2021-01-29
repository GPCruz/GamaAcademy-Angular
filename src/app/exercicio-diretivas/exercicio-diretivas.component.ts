import { Component, OnInit } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent implements OnInit {

  show = true;

  imgPrefix ='https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';

  arrayImg = MEMES_AGRUPADOS_POR_CATEGORIA;

  frutas=[
    'Abacaxi',
    'Laranja',
    'Maçã',
    'Uva'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(){
    this.show = !this.show;
  }

}
