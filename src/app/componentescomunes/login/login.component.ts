import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AuthService } from './../../servicioscomunes/auth.service';
import { Observable } from 'rxjs/Observable';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cargando: boolean = false;
  user: any = {};
  ruc: string;
  empresaIsTrue: boolean = false;
  isLogged: boolean;
  isLogged$: Observable<boolean>;

  constructor(
    private router: Router,
    public loginService: LoginService,
    private authService: AuthService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    localStorage.clear();
  }

  consultarEmpresa() {
    this.cargando = true;
    this.loginService.validarEmpresa("empresa/validar/", this.ruc);
    this.cargando = false;
  }

  private handleError(error: any): void {
    this.cargando = false;
  }

  ingresar() {
    this.cargando = true;
    this.authService.ingresar(this.user.username, this.user.password);
    this.authService.getIsLogged$().subscribe(respuesta => {
      this.isLogged = respuesta;
      this.cargando = false;
      if (this.isLogged) {
        this.activeModal.dismiss();
        this.router.navigate(["empresa"]).then(()=>{
          location.reload();
        });
      }
    });
  }

  cerrarModal(){
    this.activeModal.dismiss();
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
