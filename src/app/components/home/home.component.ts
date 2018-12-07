import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heroes: Heroe [] = [];

  constructor( private _heroesService: HeroesService,
    private router: Router) {
    //  console.log('Constructor');
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();

   // console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx ]);
  }

}
