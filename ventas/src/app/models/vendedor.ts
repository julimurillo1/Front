import { CiudadBase } from "./ciudad-base";
import { TipoDocumento } from "./tipo-documento";

export class Vendedor {
    id:number;
    tipo_documento:TipoDocumento;
    documento:number;
    nombre_completo:string;
    fecha_nacimiento:string;
    fecha_registro:string;
    ciudad:CiudadBase;
    genero:string;

}
