import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ApiRequestService } from './api-request.service';
import { LS } from '../constantes/app-constants';
import 'rxjs/add/operator/toPromise';
import { ToastrService } from 'ngx-toastr';
import { Md5 } from 'ts-md5/dist/md5';

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
    private isLogged$ = new Subject<boolean>();

    constructor(
        private router: Router,
        private apiRequest: ApiRequestService,
        private toastr: ToastrService
    ) { }

    ingresar(username: string, password: string) {
        let bodyData: AuthSolicitudParam = {
            'username': username,
            'password': "" + Md5.hashStr(password),
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
                    //window.location.href = '/index.html';
                    this.isLogged$.next(true);
                } else {
                    this.toastr.error('Usuario o clave incorrecta', 'Error');
                    this.cerrarSession();
                    this.isLogged$.next(false);
                }
            })
            .catch(err => {
                this.isLogged$.next(false);
                this.handleError(err);
            });
    }

    getIsLogged$(): Observable<boolean> {
        return this.isLogged$.asObservable();
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
        let objJWT: ObjetoJWT = JSON.parse(localStorage.getItem(this.usuarioActualKey));
        if (objJWT !== null){
            return objJWT.userId
        }
        return "no-user";
    }

    getNombrecompleto():string{
        let objJWT: ObjetoJWT = JSON.parse(localStorage.getItem(this.usuarioActualKey));
        if (objJWT !== null && objJWT.nombrecompleto && objJWT.nombrecompleto!== " "){
            return objJWT.nombrecompleto
        }else {
            return objJWT.userId;
        }
    }

    getTipoUser():number {
      let objJWT: ObjetoJWT = JSON.parse(localStorage.getItem(this.usuarioActualKey));
      if (objJWT !== null){
        return objJWT.tipoUsuario;
      }
      return 0;
    }

    eliminarDataJWT() {
        localStorage.removeItem(this.usuarioActualKey);
    }

    guardarDataJWT(dataJWT: string) {
        localStorage.setItem(this.usuarioActualKey, dataJWT);
    }

    agregarmodalopenclass():void{
      let body=document.getElementsByTagName('body')[0];
      body.classList.remove("modal-open");
      body.classList.add("modal-open");
    }

    getObjetoJWT(): ObjetoJWT {
      let dataJWT: string = localStorage.getItem(this.usuarioActualKey);
      if (dataJWT) {
        let objJWT: ObjetoJWT = JSON.parse(localStorage.getItem(this.usuarioActualKey));
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
