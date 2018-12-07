import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColeccionesService } from '../../../servicios/colecciones.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent {

  producto: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _coleccionesService: ColeccionesService ) {

    this.activatedRoute.params.subscribe( params => {
      // console.log( params['id'] );
      this.producto = this._coleccionesService.getProducto ( params['id'] );
    } );
  }

}
