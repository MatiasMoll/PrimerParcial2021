import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public nombrePaisSeleccionado;
  constructor(
    private fb:FormBuilder,
    private servicioPaises:PaisesService
  ) { 

  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'nombre':['',[Validators.required,this.spaceValidator]],
      'dni':['',[Validators.required,Validators.pattern('/^[0-9]\d{6,10}$/'),Validators.min(0)]],
      'edad':['',[Validators.required,Validators.min(18),Validators.max(99)]],
      'capacidad':['',[Validators.required,Validators.pattern('/^[0-9]\d{6,10}$/'),Validators.min(0)]],
      'unidadPropia':[''],
      'paisOrigen':['',[Validators.required]],
      'country':['',[Validators.required]]
    });
  }

  public aceptar(){
    console.log(this.formGroup.getRawValue());
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
    this.nombrePaisSeleccionado = event.name;
  }
}
