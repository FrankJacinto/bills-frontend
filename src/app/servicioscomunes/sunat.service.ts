import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class SunatService {


  
  constructor(
   public http:Http
  ) { }

  obtenerDatosSunat(ruc){
    

    return this.http.get("https://www.facturacionelectronica.com/facturacion/controller/ws_consulta_rucdni.php?documento=RUC&nro_documento="+ruc);
  }

}
