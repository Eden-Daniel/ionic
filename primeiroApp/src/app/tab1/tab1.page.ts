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

  start(){

    if(this.paginas > 0 && this.paginas != null){
      this.controleButao = true;
      this.tempo = 0;
      this.conometro = setInterval(() => {
        this.tempo++
        console.log(this.paginas)
      }, 1000)
    } else{
      alert('informe uma quantidade de paginas validas!')
    }

  }

  stop(){
    this.controleButao = false;
    clearInterval(this.conometro)
  }

}
