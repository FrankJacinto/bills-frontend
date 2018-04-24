import {Usuario} from "./entidad.usuario";
import {Tipousuario} from "./entidad.tipousuario";
import {Usuariotipousuariopk} from "./entidad.usuariotipousuariopk";
/**
 * Created by LUIS ORTIZ on 18/04/2018.
 */
export class Usuariotipousuario{
    usuariotipousuarioPK: Usuariotipousuariopk;
    estado: boolean;
    usuario: Usuario;
    tipousuario: Tipousuario
}
