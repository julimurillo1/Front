import Swal from 'sweetalert2'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  titulo = "Crear Productos";
  producto: Producto = new Producto();
  error: any;

  constructor(private service: ProductoService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      if(id){
        this.service.ver(id).subscribe(producto=>this.producto = producto)
      }
    })
  }

  public crear(): void {
    this.service.crear(this.producto).subscribe(producto => {
      console.log(producto);
      Swal.fire('Nuevo:',`Producto ${producto.nombre_producto} creado con exito`,'success');
      this.router.navigate(['/productos']);
    }, err => {
      if (err.status === 400) {
        this.error = err.error;
        console.log(this.error);
      }
    });
  }

  public editar(): void{
    this.service.editar(this.producto).subscribe(producto =>{
      console.log(producto);
      Swal.fire('Modificado:',`Producto ${producto.nombre_producto} Actualizado con exito`,'success');
      this.router.navigate(['/productos']);
    },err=> {
      if(err.status===400){
        this.error =err.error;
      }
    })
  }

}
