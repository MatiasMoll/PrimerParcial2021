import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actor } from 'src/app/clases/actor';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {


 
  public formActor:FormGroup;
  public nombrePaisSeleccionado:string = "";
  public actorCreado:Actor;
  @Output() eventoActorCreado:EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private commonService:CommonService
  ) { 
  
  }

  ngOnInit(): void {
    this.formActor = this.fb.group({
      'firstName':['',Validators.required],
      'lastName':['',Validators.required],
      'country':['',Validators.required],
      'fechaNacimiento':['',Validators.required]
    });
  }

  mostrarPais(pais){
    console.log('entra');
    console.log(pais);
    this.nombrePaisSeleccionado = pais.name;
    
  }

  crearActor(){
    console.log(this.formActor.getRawValue()['fechaNacimiento']);
    this.actorCreado = new Actor(
      this.formActor.getRawValue()['firstName'],
      this.formActor.getRawValue()['lastName'],
      this.nombrePaisSeleccionado,
      new Date(this.formActor.getRawValue()['fechaNacimiento'])
    );
    //console.log(this.formActor.getRawValue()['firstName'])
    console.log('actor creado ' + this.actorCreado + ' edad ' + this.actorCreado.getEdad());
    this.commonService.creatActor(this.actorCreado);
    //this.eventoActorCreado.emit(this.actorCreado);
    this.router.navigateByUrl('/busqueda');
  }

}
