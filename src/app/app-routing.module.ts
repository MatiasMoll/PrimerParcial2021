import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaActoresComponent } from './components/alta-actores/alta-actores.component';
import { AltaPeliculaComponent } from './components/alta-pelicula/alta-pelicula.component';
import { AltaRepartidosComponent } from './components/alta-repartidos/alta-repartidos.component';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { BusquedaPeliculaComponent } from './components/busqueda-pelicula/busqueda-pelicula.component';
import { IngresoModule } from './components/ingreso/ingreso.module';
import { LoginComponent } from './components/ingreso/login/login.component';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  {path:'',redirectTo:'bienvenido',pathMatch:'full'},
  {path:'ingreso',loadChildren:()=> import('./components/ingreso/ingreso.module').then(m => m.IngresoModule)},
  {path:'alta-repartidor',component:AltaRepartidosComponent,canActivate:[LoginGuard]},
  {path:'bienvenido',component:BienvenidosComponent},
  {path:'busqueda',component:BusquedaPeliculaComponent},
  {path:'alta-actores',component:AltaActoresComponent},
  {path:'alta-peliculas',component:AltaPeliculaComponent},
  {path:'**',redirectTo:'bienvenido',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
