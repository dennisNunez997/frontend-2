import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoriaComponent } from './demo/categoria/categoria.component';
import { ProductoComponent } from './demo/producto/producto.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProveedorComponent } from './demo/proveedor/proveedor.component';
import { ClienteComponent } from './demo/cliente/cliente.component';
import { FacturaComponent } from './demo/factura/factura.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    ProductoComponent,
    ProveedorComponent,
    ClienteComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
