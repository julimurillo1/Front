import { Venta } from "./venta";

export class Pago {
    id:number;
    fecha_pago:string;
    valor_total:number;
    ganancia:number;
    comision:number;
    id_vendedor_acreditado:number;
    nivel:number;
    venta:Venta;
}
