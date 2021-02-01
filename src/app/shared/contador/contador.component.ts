import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component( {
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
    @Input() numero = 0;

    @Output() numeroAlterado = new EventEmitter();

    constructor() { }

    ngOnInit(): void{
    }
    
    increase(): void{
        console.log( 'Incrementando: ' + this.numero);
        this.numero++;
    }

    decrease(): void{
        console.log( 'Decrementando: ' + this.numero);
        this.numero--;    
    }
}