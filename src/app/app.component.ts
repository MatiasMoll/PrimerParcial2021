import { Component } from '@angular/core';
import { Pelicula } from './clases/pelicula';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'SimulacroExamen';
  public isLogged;
  constructor(
    public servicio:CommonService
  ){
    this.isLogged = this.servicio.isLogged;
  }

}
