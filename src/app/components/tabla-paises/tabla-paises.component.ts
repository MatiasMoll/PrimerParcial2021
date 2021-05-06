import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  public listadoPaises:Array<any> = new Array<any>();
  public paisSeleccionado;
  @Output() eventoPaisSeleccionado:EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private servicePais:PaisesService
  ) { 

  }

  ngOnInit(): void {
    this.traerPaises();
    console.log(this.listadoPaises);
  }

  traerPaises(){
    this.servicePais.getTodosLosPaises().subscribe(resultado=>{
      this.listadoPaises.push(resultado);     
    });
  }
  emitirPaisSeleccionado(pais){
    console.log(pais);
    this.paisSeleccionado = pais;
    this.eventoPaisSeleccionado.emit(pais);
  }
}
