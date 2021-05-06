import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {


  @Output() eventoNuevaPelicula:EventEmitter<any> = new EventEmitter<any>();
  public formPelicula:FormGroup;
  public actorSeleccionado:Actor;
  public peliculaCreada:Pelicula;
 
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private commonService:CommonService
  ) { 
  
  }

  ngOnInit(): void {
    this.formPelicula = this.fb.group({
      'firstName':['',Validators.required],
      'actor':['',Validators.required],
      'fechaEstreno':['',Validators.required]
    });
  }

  mostrarActor(actor){
    console.log('entra');
    this.actorSeleccionado = actor.name;
    
  }

  crearPelicula(){
    this.peliculaCreada = new Pelicula();
    this.router.navigateByUrl('/busqueda');
  }

}
