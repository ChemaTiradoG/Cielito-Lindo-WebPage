import { Component, OnInit } from '@angular/core';
import { ColeccionesService, Heroe } from '../../servicios/colecciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colecciones',
  templateUrl: './colecciones.component.html'
})
export class ColeccionesComponent implements OnInit {

  colecciones: Heroe [] = [];

  constructor( private _coleccionesService: ColeccionesService,
    private router: Router) {
    //  console.log('Constructor');
  }

  ngOnInit() {
    this.colecciones = this._coleccionesService.getColecciones();

   // console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx ]);
  }

}
