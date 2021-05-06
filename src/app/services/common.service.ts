import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Actor } from '../clases/actor';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { 
    this.listadoActoresCreados = new Array<Actor>();
    this.listadoPeliculasCreadas =   new Array<Pelicula>();
  }

  public isLogged:boolean = false;
  public listadoActoresCreados:Array<Actor>;
  public listadoPeliculasCreadas:Array<Pelicula>;

  private pelicula = new BehaviorSubject<any>('');
  pelicula$ = this.pelicula.asObservable();
  private actor = new BehaviorSubject<any>('');
  actor$ = this.actor.asObservable();

  creatActor(actor:Actor){  
    this.actor.next(actor);
    this.listadoActoresCreados.push(actor);
    console.log(this.listadoActoresCreados)
  }


  createPelicula(peli:Pelicula){
    this.pelicula.next(peli);
    this.listadoPeliculasCreadas.push(peli);    
  }
}
