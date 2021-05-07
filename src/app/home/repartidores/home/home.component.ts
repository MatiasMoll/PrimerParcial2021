import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public repartidorSeleccionado;
  
  constructor(
    public miServicio:CommonService
  ) { }

  ngOnInit(): void {
  }

  seleccionarRepartidor(repartidor){
    this.repartidorSeleccionado = repartidor;
  
  }
}
