import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css']
})
export class TablaActoresComponent implements OnInit {

  @Output() eventoActorSeleccionado:EventEmitter<any> = new EventEmitter<any>();
  public actorSeleccionado:Actor;
  public listadoActores:Array<Actor> = new Array<Actor>();

  constructor(
    private commonService:CommonService
  ) {
    
  }

  ngOnInit(): void {   
    this.listadoActores = this.commonService.listadoActoresCreados;
    console.log(this.listadoActores);
  }

  emitirActorSeleccionado(actor){
    this.actorSeleccionado = actor;
    this.eventoActorSeleccionado.emit(actor);
  }

}
