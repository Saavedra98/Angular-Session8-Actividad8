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

  edad!: number; 
   

  registrar(nombreInput: String, apellidoInput:String, edadInput: String ){

    this.personas.push([String(nombreInput), String(apellidoInput), String(edadInput)]);

    this.edad = Number(edadInput); 

  }

}
