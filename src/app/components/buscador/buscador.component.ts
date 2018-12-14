import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColeccionesService } from '../../servicios/colecciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  colecciones: any[] = [];
  termino: string;
  constructor( private activatedRoute: ActivatedRoute,
                private _coleccionesService: ColeccionesService,
                private router: Router ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      // console.log(params['termino']);
      this.termino = params['termino'];
      this.colecciones = this._coleccionesService.buscarColecciones( params['termino']);
      console.log( this.colecciones);
    });
  }

  // buscarProducto( termino: string ) {
  //   console.log(termino);
  //   this.router.navigate( ['/buscar', termino]);
  // }
  // verProducto(idx: number) {
  //   this.router.navigate(['/producto', idx ]);
  // }
}
