import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './demo/producto/producto.component';
import { CategoriaComponent } from './demo/categoria/categoria.component';
import { ClienteComponent } from './demo/cliente/cliente.component';
import { ProveedorComponent } from './demo/proveedor/proveedor.component';
import { FacturaComponent } from './demo/factura/factura.component';


const routes: Routes = [

    {path: 'productos', component: ProductoComponent },
    {path: 'categorias', component: CategoriaComponent },
    {path: 'clientes', component: ClienteComponent},
    {path: 'proveedores', component: ProveedorComponent},
    {path: 'factura', component: FacturaComponent},
    {path: '**', redirectTo: '/', pathMatch: 'prefix' }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
