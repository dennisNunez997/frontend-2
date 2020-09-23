import { Component, OnInit } from '@angular/core';
import { ClientenodeService } from 'src/app/service/clientenode.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  title="FACTURAS"
  facturas: any
  myFormFactura: FormGroup;
  constructor(public servc: ClientenodeService) {
    this.servc.getFactura().subscribe(r=>{
      console.table(r.facturas);
    })
  }

  ngOnInit(): void {
    this.obtenerFactura();
    this.myFormFactura = new FormGroup({
      nombreF: new FormControl(''),
    });
  }

  obtenerFactura(){
    this.servc.getFactura().subscribe(r=>{
      return this.facturas=r.facturas
    })
  }


  ingresarFactura(){
    let nombre = this.myFormFactura.value.nombreF;
    this.servc.addFactura(nombre)
    .subscribe(r =>{

      this.obtenerFactura()
      this.myFormFactura = new FormGroup({
        nombreF: new FormControl('')
      })
    })
  }

}
