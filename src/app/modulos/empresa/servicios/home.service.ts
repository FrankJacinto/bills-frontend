import { Injectable } from '@angular/core';
import { ApiRequestService } from '../../../servicioscomunes/api-request.service';
import { ToastrService } from 'ngx-toastr';

export interface MenuParams {
    usuario: string;
}
@Injectable()
export class HomeService {
   menuStorage: string = "menus";

  constructor(
    private apiRequest: ApiRequestService
    ) { }

  getMenu(usuario:string): Promise<any> {
  		  let bodyData: MenuParams = {
          "usuario": usuario
        };
        return this.apiRequest.post('menu/obtener',bodyData)
          .then(
            jsonResp => {
              if (jsonResp.extraInfo) {
                localStorage.setItem(this.menuStorage, JSON.stringify(jsonResp.extraInfo));
              }
              return jsonResp;
            }
          )
          .catch(err => this.handleError(err));
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
