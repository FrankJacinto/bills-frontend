import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {AppConfig} from './../../servicioscomunes/app-config';
import {LS} from './../../constantes/app-constants';
import {ApiRequestService} from './../../servicioscomunes/api-request.service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  constructor(
    private router: Router,
    private api: ApiRequestService,
    private toastr: ToastrService
  ) { }

  validarEmpresa(ruta, ruc){
    this.api.get(ruta+ruc)
      .then(respuesta => {
        if(respuesta && respuesta.extraInfo){
          this.toastr.success(respuesta.operacionMensaje, 'Exito');
          localStorage.setItem(LS.KEY_ID_EMPRESA, respuesta.extraInfo.id);
          localStorage.setItem(LS.KEY_RUC_EMPRESA, respuesta.extraInfo.ruc);
        }else{
          this.toastr.error(respuesta.operacionMensaje, 'Error');
        }
      })
      .catch(err => this.handleError(err));
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
