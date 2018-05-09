import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../../../entidades/entidad.usuario";
import { Persona } from "../../../../entidades/entidad.persona";
import { AuthService } from "../../../../servicioscomunes/auth.service";
import { ToastrService } from "ngx-toastr";
import { ApiRequestService } from "../../../../servicioscomunes/api-request.service";
import { Md5 } from "ts-md5";

interface INewPassword {
  antiguaPassword: string,
  nuevaPassword: string,
  confirmarNuevaPassword: string;
}

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})

export class CuentaComponent implements OnInit {

  isEdicion: boolean = true;
  isAntiguaPasswordValido: boolean = false;
  isNuevaPasswordValido: boolean = false;
  public usuario: Usuario;
  public password: INewPassword;
  public cargando: boolean = false;

  constructor(
    public api: ApiRequestService,
    public toastr: ToastrService,
    public authService: AuthService,
  ) {
    this.usuario = new Usuario();
    this.usuario.idpersona = new Persona();
  }

  ngOnInit() {
    this.password = { antiguaPassword: "", nuevaPassword: "", confirmarNuevaPassword: "" };
    this.traerUsuario(this.authService.getUserName());
  }

  traerUsuario(id) {
    this.cargando = true;
    return this.api.get('perfil/obtener/' + id)
      .then(
        data => {
          if (data && data.extraInfo) {
            this.usuario = data.extraInfo;
          } else {
            this.toastr.info(data.operacionMensaje, "Informacion");
          }
          this.cargando = false;
        }
      )
      .catch(err => this.handleError(err));
  };

  actualizarclave() {
    let antiguaPassword = Md5.hashStr(this.password.antiguaPassword);
    let nuevaPassword = Md5.hashStr(this.password.nuevaPassword);
    this.api.get(`usuario/validarPassword/${this.authService.getUserName()}/${antiguaPassword}`)
      .then(respuesta => {
        if (respuesta && respuesta.extraInfo) {
          this.usuario.password = "" + nuevaPassword;
          this.api.get("usuario/actualizarclave/" + this.authService.getUserName() + "/" + nuevaPassword)
            .then(respuesta => {
              if (respuesta) {
                this.toastr.success(respuesta.operacionMensaje, 'Éxito');
              }
              this.cargando = false;
            })
            .catch(err => this.handleError(err));
        } else {
          this.toastr.error(respuesta.operacionMensaje, 'Error');
        }
        this.cargando = false;
      }).catch(err => this.handleError(err));
  };

  verificarPassword() {
    this.isAntiguaPasswordValido = (this.password.antiguaPassword.length > 0);
    this.isNuevaPasswordValido = (this.isAntiguaPasswordValido && this.password.nuevaPassword === this.password.confirmarNuevaPassword);
    if (this.password.antiguaPassword.length <= 0) {
      this.password.nuevaPassword = "";
      this.password.confirmarNuevaPassword = "";
    }
  }

  private handleError(error: any): void {
    this.toastr.error("Error Interno", 'Error');
    this.cargando = false;
  };

}
