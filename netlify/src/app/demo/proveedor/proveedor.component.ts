import { Component, OnInit } from '@angular/core';
import { ClientenodeService } from 'src/app/service/clientenode.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  title="PROVEEDORES"
  proveedores: any
  myFormProveedor: FormGroup;
  constructor(public servc: ClientenodeService) {
    this.servc.getProveedor().subscribe(r=>{
      console.table(r.proveedores);
    })
  }

  ngOnInit(): void {
    this.obtenerProveedores();
    this.myFormProveedor = new FormGroup({
      nombreF: new FormControl(''),
    });
  }

  obtenerProveedores(){
    this.servc.getProveedor().subscribe(r=>{
      return this.proveedores=r.proveedores
    })
  }


  ingresarProveedor(){
    let nombre = this.myFormProveedor.value.nombreF;
    this.servc.addProveedor(nombre)
    .subscribe(r =>{

      this.obtenerProveedores()
      this.myFormProveedor = new FormGroup({
        nombreF: new FormControl('')
      })
    })
  }

}
