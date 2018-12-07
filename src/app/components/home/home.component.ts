import { Component, OnInit } from '@angular/core';
import { ColeccionesService, Producto } from '../../servicios/colecciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  colecciones: Producto [] = [];

  constructor( private _coleccionesService: ColeccionesService,
    private router: Router) {
    //  console.log('Constructor');
  }

  ngOnInit() {
    this.colecciones = this._coleccionesService.getColecciones();

   // console.log(this.heroes);
  }

  verProducto(idx: number) {
    this.router.navigate(['/producto', idx ]);
  }

}
