import {Regimen} from "./entidad.regimen";
/**
 * Created by LUIS ORTIZ on 18/04/2018.
 */


 export class Empresa{
     ruc:string;
     estado:boolean;
     fechacaducidad:DateTimeFormat;
     idubigeo:number;
     logo:File;
     razonsocial:string;
     idregimen:Regimen;
 }