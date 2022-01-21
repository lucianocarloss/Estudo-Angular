import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent implements OnInit {
  
  mostrarCuros: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCursos(){

    this.mostrarCuros = !this.mostrarCuros;

  }

}
