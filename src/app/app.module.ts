import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { BusquedaPeliculaComponent } from './components/busqueda-pelicula/busqueda-pelicula.component';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { AltaPeliculaComponent } from './components/alta-pelicula/alta-pelicula.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { AltaActoresComponent } from './components/alta-actores/alta-actores.component';
import { TablaActoresComponent } from './components/tabla-actores/tabla-actores.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaPeliculaComponent,
    BienvenidosComponent,
    NavBarComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    AltaPeliculaComponent,
    TablaPaisesComponent,
    AltaActoresComponent,
    TablaActoresComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
