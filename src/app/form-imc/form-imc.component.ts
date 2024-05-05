import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-imc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-imc.component.html',
  styleUrl: './form-imc.component.scss'
})
export class FormImcComponent {

  imc = {
    nombre: "",
    peso: null,
    talla: null,
    valor: 0,
    diagnostico: ""
  };
  mostrarResultado = false;
  pacientes: Paciente = [];

  calcularImc(){
    this.imc.valor = Number(this.imc.peso) / (Number(this.imc.talla) * Number(this.imc.talla));
    this.imc.diagnostico = this.diagnosticoImc(this.imc.valor);
    this.pacientes.push({
      nombre: this.imc.nombre, 
      valorimc: this.imc.valor,
      diagnostico: this.imc.diagnostico
    });
    this.mostrarResultado = true;
  }

  diagnosticoImc(valor: number):string{
    let resultado = "";
    if(valor <= 18){
      resultado = "Bajo de peso";
    }else if(valor <= 25){
      resultado = "Peso normal";
    }else if(valor <= 30){
      resultado = "Con Sobrepeso";
    }else if(valor <= 35){
      resultado = "Obesidad leve";
    }else if(valor <= 39){
      resultado = "Obesidad media";
    }else{
      resultado = "Obesidad mórbida";
    }
    return resultado;
  }
}
type Paciente = Array<{nombre: string, valorimc: number, diagnostico: string}>
