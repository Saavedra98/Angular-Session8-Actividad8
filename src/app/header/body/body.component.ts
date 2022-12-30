import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  personas = [
    ['Cristhian', 'Saavedra', '20'], 
  ];

  registrar(nombreInput: String, apellidoInput:String, edadInput: String ){

  }

}
