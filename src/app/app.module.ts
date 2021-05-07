import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';

import { AltaRepartidosComponent } from './home/repartidores/alta-repartidos/alta-repartidos.component';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidosComponent,
    NavBarComponent,
    TablaPaisesComponent,
    AltaRepartidosComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
