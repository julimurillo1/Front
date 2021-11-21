import Swal from 'sweetalert2'
import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public titulo: string = 'Listado de Productos';
  productos: Producto[];
  totalRegistros=0;
  totalPorPagina=4;
  paginaActual=0;
  pageSizeOptions:number[]=[5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(private service: ProductoService) { }

  ngOnInit(): void {
    this.calcularRangos();
  }

  public paginar(event: PageEvent): void {
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
    this.calcularRangos();

  }

  private calcularRangos() {
    this.service.listarPaginas(this.paginaActual.toString(), this.totalPorPagina.toString()).subscribe(p => {
      this.productos = p.content as Producto[];
      this.totalRegistros = p.totalElements as number;
      this.paginator._intl.itemsPerPageLabel ='Registros:';
    });
  }

  public eliminar(producto: Producto): void {

    Swal.fire({
      title: 'Cuidado?',
      text: `¿Seguro que desea eliminar a ${producto.nombre_producto}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(producto.id).subscribe(() => {
          //this.productos = this.productos.filter(a => a !== producto);
          this.calcularRangos();
          Swal.fire('Eliminado:', `Producto ${producto.nombre_producto} eliminado con exito`, 'success');
        });
      }
    });
  }

}
