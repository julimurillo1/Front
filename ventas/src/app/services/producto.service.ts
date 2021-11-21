import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseEndpoint = 'http://localhost:8090/api/productos';
  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }


  public listar(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseEndpoint);
  }

  public listarPaginas(page: string, size: string): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<any>(`${this.baseEndpoint}/pagina`, { params: params });
  }

  public ver(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseEndpoint}/${id}`);
  }

  public crear(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.baseEndpoint, producto, { headers: this.cabeceras });
  }

  public editar(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.baseEndpoint}/${producto.id}`, producto, { headers: this.cabeceras });
  }

  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }
}
