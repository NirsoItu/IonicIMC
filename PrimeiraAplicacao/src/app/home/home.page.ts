import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Variáveis da tela
  peso: string;
  altura: string;
  resultado: string;
  numero: string;

  constructor(public NavCtrl: NavController) { }
  //Convertendo as variaveis
  calcular() {
    let p = parseFloat(this.peso);
    let a = parseFloat(this.altura);
    //calculando
    let imc = p / (a * a);
    //criar variavel e guardar o resultado
    let result;
    let num;
    if (imc < 18.5) {
      result = "Abaixo do peso";
      num = imc;
    } else if (imc < 25) {
      result = "Peso normal";
      num = imc;
    } else {
      result = "Acima do peso";
      num = imc;
    }
    //Exibindo na interface
    this.resultado = result;
    this.numero = num;

  }
}
