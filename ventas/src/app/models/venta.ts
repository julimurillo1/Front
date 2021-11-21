import { DetalleVenta } from "./detalle-venta";

export class Venta {
    id:number;
    fecha_venta:string;
    valor_total:number;
    id_vendedor:number;
    detalles:DetalleVenta[]=[];
    
}
