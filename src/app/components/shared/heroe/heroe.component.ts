import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColeccionesService } from '../../../servicios/colecciones.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _coleccionesService: ColeccionesService ) {

    this.activatedRoute.params.subscribe( params => {
      // console.log( params['id'] );
      this.heroe = this._coleccionesService.getHeroe ( params['id'] );
    } );
  }

}
