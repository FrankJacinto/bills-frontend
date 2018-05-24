import {Regimen} from "./entidad.regimen";
import { Ubigeo } from "./entidad.ubigeo";
/**
 * Created by LUIS ORTIZ on 18/04/2018.
 */
 export class Empresa{
     ruc:string;
     estado:boolean=true;
     fechacaducidad:Date;
     fecharegistro: Date;
     idubigeo: Ubigeo;
     logo:File;
     razonsocial:string;
     idregimen:Regimen;
 }