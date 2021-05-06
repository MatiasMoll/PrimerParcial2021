import { HashLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usrName:string;
	public usrPass:string;

	constructor(
		//public fireAuth:AngularFireAuth,
		public router:Router,
		private servicio:CommonService
		//public authService: AuthService
	) {
			
	}

	ngOnInit() {
	}
  
	irAlRegistro(){
		this.router.navigate(['/registro']);
	}
	/*loginWithGoogle(){
		this.authService.GoogleAuth();
	}*/

	login(){
		//this.authService.loginWithEmailAndPassword(this.usrName,this.usrPass);
		if(this.usrName == "test@gmail.com" && this.usrPass == "isanoe20"){
			this.servicio.isLogged = true;
			this.router.navigateByUrl('alta-repartidor');
		}
  	}        
	clearInputs(){
		this.usrName = "";
		this.usrPass = "";
	}
	
	fillInputs(){
		this.usrName = "test@gmail.com";
		this.usrPass = "isanoe20";
	}

}
