import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listadoDePeliculas:Pelicula[];
  @Output() peliculaSeleccionadaEvento:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  SeSeleccionoUnaPelicula(peli){
    console.log(peli);
    this.peliculaSeleccionadaEvento.emit(peli);
  }
}
