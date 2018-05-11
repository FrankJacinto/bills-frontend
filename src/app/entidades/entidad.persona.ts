import {Ubigeo} from "./entidad.ubigeo";
import {Empresa} from "./entidad.empresa";
/**
 * Created by LUIS ORTIZ on 18/04/2018.
 */
export class Persona{
    id:number;
    apellido:string;
    cliente:boolean;
    estado:boolean;
    idubigeo:Ubigeo;
    nombre:string;
    proveedor:boolean;
    rucempresa:Empresa;
}