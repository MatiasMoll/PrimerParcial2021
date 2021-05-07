import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-alta-repartidos',
  templateUrl: './alta-repartidos.component.html',
  styleUrls: ['./alta-repartidos.component.css']
})
export class AltaRepartidosComponent implements OnInit {

  public formGroup:FormGroup;
  public listaPaises:Array<Object> = new Array<Object>();
  public isListaVacia = true;
  public paisSeleccionado;

  constructor(
    private fb:FormBuilder,
    private servicioPaises:PaisesService,
    public servicioRepartidor:CommonService,
    private router:Router
  ) { 
   
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'nombre':['',[Validators.required,this.spaceValidator]],
      'dni':['',[Validators.required,Validators.min(0)]],
      'edad':['',[Validators.required,Validators.min(18),Validators.max(99)]],
      'capacidad':['',[Validators.required,Validators.min(0)]] 
    });
  }

  public aceptar(){
    let repartidor = {
      'name':this.formGroup.get('nombre').value,
      'dni':this.formGroup.get('dni').value,
      'pais':this.paisSeleccionado
    };
    console.log(repartidor);
    this.router.navigateByUrl('/home');
    this.servicioRepartidor.listadoRepartidoresCreados.push(repartidor);
  }

  private spaceValidator(control: AbstractControl): null | object {
    const nombre = <string> control.value;
    const espacios = nombre.includes(' ');

    if(espacios){
      return {
        contieneEspacios:true
      }
    }else{
      return null;
    }
  }

  traerPaises(region:string){
    this.servicioPaises.getPaisesPorRegion(region).subscribe(resultado =>{
      if(this.isListaVacia){
        this.listaPaises.push(resultado);
      }else{
        this.listaPaises = new Array<Object>();
        this.listaPaises.push(resultado);
      }
      this.isListaVacia = false;
    });
  }

  mostrarPais(event){
    this.paisSeleccionado = event;
  }
}
