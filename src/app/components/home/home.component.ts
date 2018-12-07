import { Component, OnInit } from '@angular/core';
import { ColeccionesService, Heroe } from '../../servicios/colecciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heroes: Heroe [] = [];

  constructor( private _coleccionesService: ColeccionesService,
    private router: Router) {
    //  console.log('Constructor');
  }

  ngOnInit() {
    this.heroes = this._coleccionesService.getColecciones();

   // console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx ]);
  }

}
