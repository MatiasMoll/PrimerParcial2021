import { Actor } from "./actor";

export class Pelicula {
    
    public id:string;
    public nombre:string;
    public tipo:string;
    public fechaEstreno:Date;
    public cantidadDePublico:String;
    public fotoDeLaPelicula:String;
    public actorSeleccionado?:Actor;
}
