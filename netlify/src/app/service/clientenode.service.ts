import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './Categoria';
import { Cliente } from './Cliente';
import { Proovedor } from './Proveedor';
import { Producto  } from './Producto';
import { Factura } from './Factura';


@Injectable({
  providedIn: 'root'
})
export class ClientenodeService {


  URL = "https://demonoderestfull.herokuapp.com/api/";


  constructor(private httpc: HttpClient) { }


  getCategorias(): Observable<Categoria>{
   
    return this.httpc.get<Categoria>(this.URL+'categoria');
  
  }
  
  addCategoria(nombreF:string)
  {
    let objetoCategoria = {nombre: nombreF}
    return this.httpc.post(this.URL+'categoria',objetoCategoria);
  }

  getProducto(): Observable<Producto>{
    return this.httpc.get<Producto>(this.URL+'producto');
  }

  addProducto(nombreF: string)
  {
    let objetoProducto = {nombre: nombreF}
    return this.httpc.post(this.URL+'producto',objetoProducto);
  }

  getCliente(): Observable<Cliente>{
    return this.httpc.get<Cliente>(this.URL+'cliente');
  }

  addCliente(nombreF: string)
  {
    let objetoCliente = {nombre: nombreF}
    return this.httpc.post(this.URL+'cliente',objetoCliente);
  }

  getProveedor(): Observable<Proovedor>{
    return this.httpc.get<Proovedor>(this.URL+'proveedor');
  }

  addProveedor(nombreF: string)
  {
    let objetoProveedor = {nombre: nombreF}
    return this.httpc.post(this.URL+'proveedor',objetoProveedor);
  }

  getFactura(): Observable<Factura>{
    return this.httpc.get<Factura>(this.URL+'factura');
  }

  addFactura(nombreF: string)
  {
    let objetoFactura = {nombre: nombreF}
    return this.httpc.post(this.URL+'factura',objetoFactura);
  }

  

  

  


}
