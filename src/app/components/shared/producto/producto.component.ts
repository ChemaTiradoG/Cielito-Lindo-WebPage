import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColeccionesService } from '../../../servicios/colecciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  producto: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _coleccionesService: ColeccionesService,
               private router: Router ) {

    this.activatedRoute.params.subscribe( params => {
      this.producto = this._coleccionesService.getProducto ( params['id'] );
    } );
  }
  buscarCategoria( termino: string ) {
    console.log(termino);
    this.router.navigate( ['/buscar', termino]);
  }

  verProducto(idx: number) {
    this.router.navigate(['/producto', idx ]);
  }

}
