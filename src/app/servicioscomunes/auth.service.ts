import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ApiRequestService } from './api-request.service';
import { LS } from '../constantes/app-constants';
import 'rxjs/add/operator/toPromise';
import {ToastrService} from 'ngx-toastr';

export interface AuthSolicitudParam {
    username: string;
    password: string;
}

export interface ObjetoJWT {
    userId:string;
    token:string;
    menus:any;
    tipoUsuario: number;
    nombrecompleto: string;
}

export interface AuthRespuesta {
    success: boolean;
    mensaje: string;
    urlDestino: string;
    user?:ObjetoJWT;
}

@Injectable()
export class AuthService {

    public usuarioActualKey: string = "currentUser";

    constructor(
        private router: Router,
        private apiRequest: ApiRequestService,
        private toastr: ToastrService
    ) { }

    ingresar(username: string, password: string) {
        let bodyData: AuthSolicitudParam = {
            'username': username,
            'password': password,
        };
        this.apiRequest.post('session', bodyData)
            .then(
                jsonResp => {
                if (jsonResp && jsonResp.item && jsonResp.estadoOperacion === "EXITO") {
                    let user = {
                        "userId": jsonResp.item.usuarioId,
                        "token": jsonResp.item.token,
                        "nombrecompleto": jsonResp.item.nombrecompleto
                    };
                    localStorage.setItem(this.usuarioActualKey, JSON.stringify(user));
                    this.router.navigate(["empresa"]);
                } else {
                    this.toastr.error('Usuario o clave incorrecta', 'Error');
                    this.cerrarSession();
                }
            })
            .catch(err => this.handleError(err));
    }

    private handleError(error: any) {
      switch (error.status) {
        case 401:
        case 403:
          this.toastr.error('Usuario o clave incorrecta', 'Error');
          break;
        default:
          this.toastr.error('Error interno', 'Error');
          break;
      }
    }

    cerrarSession(): void {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(["/welcome"]);/* ir al backend y caducar token */
    }

    getUserName():string {
        let objJWT: ObjetoJWT = JSON.parse(this.almacenamiento.getItem(this.usuarioActualKey));
        if (objJWT !== null){
            return objJWT.userId
        }
        return "no-user";
    }

    getNombrecompleto():string{
        let objJWT: ObjetoJWT = JSON.parse(this.almacenamiento.getItem(this.usuarioActualKey));
        if (objJWT !== null && objJWT.nombrecompleto && objJWT.nombrecompleto!== " "){
            return objJWT.nombrecompleto
        }else {
            return objJWT.userId;
        }
    }

    getTipoUser():number {
      let objJWT: ObjetoJWT = JSON.parse(this.almacenamiento.getItem(this.usuarioActualKey));
      if (objJWT !== null){
        return objJWT.tipoUsuario;
      }
      return 0;
    }

    eliminarDataJWT() {
        this.almacenamiento.removeItem(this.usuarioActualKey);
    }

    guardarDataJWT(dataJWT: string) {
        this.almacenamiento.setItem(this.usuarioActualKey, dataJWT);
    }

    agregarmodalopenclass():void{
      let body=document.getElementsByTagName('body')[0];
      body.classList.remove("modal-open");
      body.classList.add("modal-open");
    }

    getObjetoJWT(): ObjetoJWT {
      let dataJWT: string = this.almacenamiento.getItem(this.usuarioActualKey);
      if (dataJWT) {
        let objJWT: ObjetoJWT = JSON.parse(this.almacenamiento.getItem(this.usuarioActualKey));
        return objJWT;
      } else {
        return null;
      }
    };

    hayToken():boolean {
      let objJWT: ObjetoJWT = this.getObjetoJWT();
      if (objJWT !== null){
        return true;
      }else{
        return false;
      }
    };

    getToken():string {
      let objJWT: ObjetoJWT = this.getObjetoJWT();
      if (objJWT !== null){
        return objJWT.token;
      }
      return null;
    };

    getMenus():any {
      let objJWT: ObjetoJWT = JSON.parse(localStorage.getItem(LS.KEY_MENUS));
      if (objJWT !== null){
        return objJWT;
      }
      return null;
    };

}
