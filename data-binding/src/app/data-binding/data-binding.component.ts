import { Component, OnInit,  } from '@angular/core';






@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  
})
export class DataBindingComponent implements OnInit {


  url: string = 'http://startsistemas.com.br';
  valorAtual: string = "";
  valorSalvo: any;
  isMouseOver: boolean = false;
  nome: string = 'abc';

  pessoa: any = {
    nome: 'Luciano',
    idade: '40'

  }

  nomeDoCurso: string = "Angular";

  valorInicial = 15;


  getValor() {
    return 1;
  }

  cursoAngular: boolean = true;

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert("Botão Clicado")
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log()
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvaValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any){
    // console.log(evento.novoValor);
    alert(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }



}
