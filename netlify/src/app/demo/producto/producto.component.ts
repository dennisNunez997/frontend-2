import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientenodeService } from 'src/app/service/clientenode.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  title='PRODUCTO'
  productos: any
  myFormProducto: FormGroup;
  constructor(public servc: ClientenodeService) { 
    
  }

  ngOnInit(): void {
    this.obtenerProductos();
    this.myFormProducto = new FormGroup({
      nombreF: new FormControl(''),
    });
  }

  obtenerProductos(){
    this.servc.getProducto().subscribe(r=>{
      return this.obtenerProductos
    })
  }

  ingresarProducto(){
    let nombre = this.myFormProducto.value.nombreF;
    this.servc.addCategoria(nombre)
    .subscribe(r =>{

      this.obtenerProductos()
      this.myFormProducto = new FormGroup({
        nombreF: new FormControl('')
      })
    })
  }
 

}
