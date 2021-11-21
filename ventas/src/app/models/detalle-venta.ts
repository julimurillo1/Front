import { Venta } from "./venta";

export class DetalleVenta {
    id:number;
    cantidad:number;
    valor_total:number;
    id_producto:number;
    venta:Venta;
}
