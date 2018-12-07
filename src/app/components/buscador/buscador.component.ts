import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColeccionesService } from '../../servicios/colecciones.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  colecciones: any[] = [];
  termino: string;
  constructor( private activatedRoute: ActivatedRoute,
                private _coleccionesService: ColeccionesService ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      // console.log(params['termino']);
      this.termino = params['termino'];
      this.colecciones = this._coleccionesService.buscarColecciones( params['termino']);
      console.log( this.colecciones);
    });
  }

}
