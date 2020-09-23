import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ClientenodeService } from 'src/app/service/clientenode.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  title="CLIENTES"
  clientes: any
  myFormCliente: FormGroup;
  constructor(public servc: ClientenodeService) {


    this.servc.getCliente().subscribe(r=>{
     console.log(r.clientes[0])
    }
    )
  }

  ngOnInit(): void {


    this.obtenerClientes();

    this.myFormCliente = new FormGroup({
      nombreF: new FormControl(''),
      apellidoF: new FormControl('')
    });
  }

  obtenerClientes(){
    this.servc.getCliente().subscribe(r=>{
      return this.clientes=r.clientes
    })
  }

  ingresarClientes(){
    let nombre = this.myFormCliente.value.nombreF;
    this.servc.addCliente(nombre)
    .subscribe(r =>{

      this.obtenerClientes()
      this.myFormCliente = new FormGroup({
        nombreF: new FormControl(''),
        apellidoF: new FormControl('')
      })
    })
  }

}
