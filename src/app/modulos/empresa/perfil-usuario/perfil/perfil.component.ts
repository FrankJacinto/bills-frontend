import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../../../entidades/entidad.usuario";
import { Persona } from "../../../../entidades/entidad.persona";
import { ApiRequestService } from "../../../../servicioscomunes/api-request.service";
import { AuthService } from "../../../../servicioscomunes/auth.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public usuario: Usuario;
  public persona: Persona;
  public cargando: boolean = false;

  constructor(
    private apiRequest: ApiRequestService,
    public toastr: ToastrService,
    public auth: AuthService
  ) {
    this.usuario = new Usuario();
    this.usuario.idpersona = new Persona();
    this.persona = new Persona();
  }

  ngOnInit() {
    this.traerUsuario(this.auth.getUserName());
  }

  traerUsuario(id) {
    this.cargando = true;
    return this.apiRequest.get('perfil/obtener/' + id)
      .then(
        data => {
          if (data && data.extraInfo) {
            this.usuario = data.extraInfo;
            this.persona = this.usuario.idpersona;
          } else {
            this.toastr.info(data.operacionMensaje, "Informacion");
          }
          this.cargando = false;
        }
      )
      .catch(err => this.handleError(err));
  };

  guardarUsuario() {
    this.cargando = true;
    if (this.persona.id) {
      return this.apiRequest.put('persona/actualizar', this.persona)
        .then(
          data => {
            if (data && data.extraInfo) {
              this.toastr.success(data.operacionMensaje, "Informacion");
            } else {
              this.toastr.info(data.operacionMensaje, "Informacion");
            }
            this.cargando = false;
          }
        )
        .catch(err => this.handleError(err));
    }
  };

  private handleError(error: any): void {
    this.toastr.error("Error Interno", 'Error');
    this.cargando = false;
  };

}
