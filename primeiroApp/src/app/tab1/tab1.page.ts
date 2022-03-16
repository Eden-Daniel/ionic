import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  //variaves
  paginas;
  conometro;
  tempo;
  controleButao = false;
  resultado = null; 

  start(){

    if(this.paginas > 0 && this.paginas != null){
      this.controleButao = true;
      this.tempo = 0;
      this.conometro = setInterval(() => {
        this.tempo++        
      }, 1000)
    } else{
      alert('informe uma quantidade de paginas validas!')
    }

  }

  stop(){
    this.controleButao = false;
    clearInterval(this.conometro)
    this.mostrarResultado()
    

  }

  mostrarResultado(){
    this.tempo = this.tempo * this.paginas;  //multiplicado segundos por paginas
    // convertendo para tipo date, trasformando em mile segundo e usar funçao para mostrar em hh:mm:ss
    this.resultado = new Date(this.tempo * 1000).toISOString().substr(11, 8)

  }

  reiniciar(){
    this.paginas = null;
    this.tempo = 0;
    this.controleButao = false
    this.resultado = null
  }
 
}