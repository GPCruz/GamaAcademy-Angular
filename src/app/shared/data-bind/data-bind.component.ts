import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.scss']
})
export class DataBindingComponent implements OnInit {

  @Output() enviarInformacao = new EventEmitter();

  imageURL = 'https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg';
  tamanhoDaImagem = 100;

  botaoHabilitado = true;

  constructor() {
    setInterval(() => {
      this.enviarInformacao.emit();
    }, 1000)
  }

  ngOnInit(): void {
  }

  getTextoAcessivel() {
    let valor = 10;
    const texto = '20';
    const lala = valor + texto;

    return 'Um texto acessível...' + this.imageURL;
  }

  clicouNoBotao(event: MouseEvent) {
    console.log('Clicou no botão!', event);
    this.enviarInformacao.emit();
  }

  passouMousePorCima(event: any) {
    console.log('Passou o mouse', event.value);
  }

}
