import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-suma',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-suma.component.html',
  styleUrl: './form-suma.component.scss'
})
export class FormSumaComponent {

  suma = {
    numero1: 0,
    numero2: 0,
    resultado: 0
  }
  mostrarResultado = false;

  calcularSuma(){
    this.suma.resultado = Number(this.suma.numero1) + Number(this.suma.numero2);    
    this.mostrarResultado = true;
  }

}
