import { Component, OnInit, HostListener } from '@angular/core';
import { ColeccionesService, Producto } from '../../servicios/colecciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colecciones',
  templateUrl: './colecciones.component.html',
  styleUrls: ['./colecciones.component.css']
})
export class ColeccionesComponent implements OnInit {

  colecciones: Producto [] = [];

  constructor( private _coleccionesService: ColeccionesService,
    private router: Router) {
    //  console.log('Constructor');
  }

  ngOnInit() {
    this.colecciones = this._coleccionesService.getColecciones();

   // console.log(this.heroes);
  }

  buscarProducto( termino: string ) {
    console.log(termino);
    this.router.navigate( ['/buscar', termino]);
  }

  verProducto(idx: number) {
    this.router.navigate(['/producto', idx ]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 768) {
      const element = document.getElementById('buscador');
      element.classList.remove('buscador');
      element.classList.add('buscador-chico');
      const contenedor = document.getElementById('cont-buscador');
      contenedor.classList.remove('cont-buscador');
      contenedor.classList.add('cont-buscador-chico');
      // console.log(event.target.innerWidth);
    } else if (event.target.innerWidth > 768) {
      const element = document.getElementById('buscador');
      element.classList.add('buscador');
      element.classList.remove('buscador-chico');
      const contenedor = document.getElementById('cont-buscador');
      contenedor.classList.add('cont-buscador');
      contenedor.classList.remove('cont-buscador-chico');
    }
  }

}
