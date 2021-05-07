import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AltaRepartidosComponent } from './home/repartidores/alta-repartidos/alta-repartidos.component';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';

import { IngresoModule } from './components/ingreso/ingreso.module';
import { LoginComponent } from './components/ingreso/login/login.component';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  {path:'',redirectTo:'bienvenido',pathMatch:'full'},
  {path:'ingreso',loadChildren:()=> import('./components/ingreso/ingreso.module').then(m => m.IngresoModule)},
  {path:'home',loadChildren:() => import('./home/repartidores/repartidores.module').then(m=>m.RepartidoresModule),canActivate:[LoginGuard]},
  
  {path:'bienvenido',component:BienvenidosComponent},
  {path:'**',redirectTo:'bienvenido',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
