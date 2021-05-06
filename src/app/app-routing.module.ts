import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaActoresComponent } from './components/alta-actores/alta-actores.component';
import { AltaPeliculaComponent } from './components/alta-pelicula/alta-pelicula.component';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { BusquedaPeliculaComponent } from './components/busqueda-pelicula/busqueda-pelicula.component';

const routes: Routes = [
  {path:'',redirectTo:'busqueda',pathMatch:'full'},
  {path:'bienvenido',component:BienvenidosComponent},
  {path:'busqueda',component:BusquedaPeliculaComponent},
  {path:'alta-actores',component:AltaActoresComponent},
  {path:'alta-peliculas',component:AltaPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
