import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.css']
})
export class BienvenidosComponent implements OnInit {

  public nombre:string;
  public blog:string;
  public imagen:string;
  public git:string;

  constructor(
    private servicioGit:GithubService,
    private router:Router
  ) { 
    this.mostrarData();
  }

  ngOnInit(): void {
  }


  mostrarData(){
    let data = this.servicioGit.getData().subscribe(resultado => {
      this.nombre = resultado['name'];
      this.imagen = resultado['avatar_url'];
      this.blog = resultado['blog'];
      this.git = resultado['html_url']
    });
    //this.nombre = data['name'];
  }

  abrirBlog(){
    window.open(this.blog, "_blank");
  }
  abrirGithub(){
    window.open(this.git,'_blank');
  }
  irLogin(){
    this.router.navigateByUrl('ingreso');
  }
}
