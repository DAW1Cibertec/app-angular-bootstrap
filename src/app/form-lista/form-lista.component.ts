import { Component } from '@angular/core';

@Component({
  selector: 'app-form-lista',
  standalone: true,
  imports: [],
  templateUrl: './form-lista.component.html',
  styleUrl: './form-lista.component.scss'
})
export class FormListaComponent {

  alumnos = [
    {nombre: "Joan", apellido: "Osorio", nota: 18},
    {nombre: "José", apellido: "Lagos", nota: 5},
    {nombre: "Juan", apellido: "Mazuelos", nota: 10},
    {nombre: "Luis", apellido: "Ayala", nota: 12},
    {nombre: "Luis", apellido: "Rojas", nota: 20},
    {nombre: "Nelson", apellido: "Laura", nota: 17},
    {nombre: "Pedro", apellido: "Mejia", nota: 6},
    {nombre: "Abel", apellido: "Perez", nota: 11},
  ];

}
