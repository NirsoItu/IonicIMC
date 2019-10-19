import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Variáveis da tela
  peso: number;
  altura: number;
  resultado: string;
  numero: number;
  imagem: string;
  texto: string;


  constructor(public NavCtrl: NavController) { }
  //Convertendo as variaveis
  calcular() {

    //calculando
    let imc = this.peso / ( this.altura * this.altura);
    //criar variavel e guardar o resultado
    let result;
    let num; 
    let img;
    let txt;

    if (imc < 18.5) {
      result = "Você está abaixo do peso";
      num = "Seu IMC é: "+imc;
      img = "magro";
      txt = "Estar abaixo do peso é uma condição em que a pessoa pesa menos do que é considerado adequado para aquela altura, idade e sexo. Uma pessoa nestas condições pode estar com alguma doença que a está emagrecendo ou sua nutrição não está boa o suficiente. Normalmente estas pessoas podem ter deficiências de nutrientes como vitaminas, sais minerais, proteínas, gorduras ou sob o risco de estar com anorexia.";
    } else if (imc >= 18.5 && imc <= 24.9) {
      result = "Você está com peso normal";
      num = "Seu IMC é: "+imc;
      img = "normal";
      txt = "Estar dentro da faixa de peso normal é significa ter um peso considerado adequado para sua altura, idade e sexo, de acordo com as faixas do IMC - momento de fazer a manutenção do peso Para manter o peso é importante manter uma dieta balanceada (não basta alimentos corretos, mas também quantidades corretas) para seu organismo. Devem ser avaliados peso, idade, composição corporal, presença de doenças e/ou comorbidades.";
    } else if (imc >= 25 && imc <= 29.9){
      result = "Você está com sobrepeso";
      num = "Seu IMC é: "+imc;
      img = "emergencia";
      txt = "O sobrepeso é uma condição em que a pessoa pesa mais do que é considerado adequado para aquela altura, idade e sexo. O sedentarismo e os maus hábitos alimentares levam ao aumento dessa parcela de indivíduos com sobrepeso a cada ano. Essa faixa, se analisada junto com outras medidas e índices, pode demonstrar um risco maior de doenças como diabetes tipo 2, dislipidemia (com colesterol HDL baixo e triglicérides altos), ácido úrico aumentado, hipertensão, entre outras.";
    } else if (imc >= 30 && imc <= 34.9){
      result = "Cuidado! Você está com Obesidade grau 1";
      num = "Seu IMC é: "+imc;
      img = "emergencia";
      txt = " Procure um médico. O tratamento é realizado através de dieta apropriada com avaliação médica em conjunto com a prática de exercícios, desde que o paciente seja avaliado e liberado pelo médico. Além disso, é preciso que o paciente realize as atividades com o acompanhamento de um profissional de educação física. Em alguns casos avaliados pelo médico, pode-se fazer o uso de remédios para emagrecer para ajudar no controle do peso.";
    } else if (imc >= 35 && imc <= 39.9){
      result = "Cuidado! Você está com Obesidade grau 2";
      num = "Seu IMC é: "+imc;
      img = "cirurgia";
      txt = "Procure um médico urgentemente. Os riscos associados à obesidade de grau II são mais acentuados. Entre eles, estão a esteatose hepática, doenças articulares, hipertensão, diabetes mellitus, síndrome metabólica, cânceres, infarto agudo do miocárdio e acidente vascular cerebral, lembrando que estes dois últimos são as principais causas de morte no Brasil e no mundo.";
    } else {
      result = "Cuidado! Você está com Obesidade grau 3";
      num = "Seu IMC é: "+imc;
      img = "morto";
      txt = "Procure um médico urgentemente. Entre as patologias associadas à obesidade grau 3, estão os distúrbios hormonais, cardiopatias, morte súbita, dermatites, osteoporose, hipertensão, hepatopatias e insuficiência venosa. Porém, segundo a Organização Mundial de Saúde (OMS), a obesidade de grau III é a principal causa de morte evitável do mundo.";
    }
    
    //Exibindo na interface
    this.resultado = result;
    this.numero = num;
    this.imagem = img;
    this.texto = txt;
  }
}
