import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { cursosModule } from './cursos/cursos.module';
// import { CursosService } from './cursos/cursos.service';
import { criarCursoModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    criarCursoModule,
    cursosModule
  ],
  providers: [LogService],
  // providers: [
  //   CursosService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
