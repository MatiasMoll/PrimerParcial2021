import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Actor } from '../clases/actor';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { 
    this.listadoRepartidoresCreados = new Array<Actor>();
    this.listadoPeliculasCreadas =   new Array<Pelicula>();
  }

  public isLogged:boolean = false;
  public listadoRepartidoresCreados:Array<any>;
  public listadoPeliculasCreadas:Array<Pelicula>;

  private pelicula = new BehaviorSubject<any>('');
  pelicula$ = this.pelicula.asObservable();
  private repartidor = new BehaviorSubject<any>('');
  repartidor$ = this.repartidor.asObservable();

  crearRepartidor(repartidor:any){  
    this.repartidor.next(repartidor);
    this.listadoRepartidoresCreados.push(repartidor);
    console.log(this.listadoRepartidoresCreados)
  }


  createPelicula(peli:Pelicula){
    this.pelicula.next(peli);
    this.listadoPeliculasCreadas.push(peli);    
  }
}
