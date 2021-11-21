import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosFormComponent } from './components/productos/productos-form.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VendedoresComponent } from './components/vendedores/vendedores.component';
import { VentasComponent } from './components/ventas/ventas.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'productos'},
  {path:'productos', component:ProductosComponent},
  {path:'productos/form', component:ProductosFormComponent},
  {path:'productos/form/:id', component:ProductosFormComponent},
  {path:'vendedores', component:VendedoresComponent},
  {path:'ventas', component:VentasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
