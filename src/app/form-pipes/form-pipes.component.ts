import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-pipes',
  standalone: true,
  imports: [
    DatePipe, UpperCasePipe, CurrencyPipe
  ],
  templateUrl: './form-pipes.component.html',
  styleUrl: './form-pipes.component.scss'
})
export class FormPipesComponent {

  currentDate = new Date();
  clientes = [
    {nombre: "Karla Gomez"},
    {nombre: "luis salvatierra"},
    {nombre: "CAMILA HURTADO"},
    {nombre: "Pedro navaja"},
    {nombre: "rodrigo Huaman"},
  ];

  cursos = [
    {nombre: "Angular", precio: 2000},
    {nombre: "Base de datos", precio: 3500},
    {nombre: "Gestión de Proyectos", precio: 4500},
    {nombre: "AWS - Developer", precio: 1500},
  ]


}
