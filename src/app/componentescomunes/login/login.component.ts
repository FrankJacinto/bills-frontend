import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {AuthService} from './../../servicioscomunes/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cargando:boolean=false;
  user: any = {};
  ruc:string;
  empresaIsTrue:boolean=false;

  constructor(
    public loginService: LoginService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    localStorage.clear();
  }

  consultarEmpresa(){
    this.cargando = true;
    this.loginService.validarEmpresa("empresa/validar/",this.ruc);
    this.cargando = false;
  }

  private handleError(error: any): void {
    this.cargando = false;
  }

  ingresar() {
    this.cargando = true;
    this.authService.ingresar(this.user.username, this.user.password)
      .then( rpta => {
        this.cargando = false;
      });
  }

  /*
  armarMenu(){
    this.apiService.get("menu/traer/"+this.authService.getUserName())
      .then(respuesta => {
        if(respuesta && respuesta.extraInfo){
          localStorage.setItem(LS.KEY_MENUS,JSON.stringify(respuesta.extraInfo));
        }else{
          this.toastr.error(respuesta.operacionMensaje, 'Error');
        }
      })
      .catch(err => this.handleError(err));
  }*/

}
