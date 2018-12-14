import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { template } from '@angular/core/src/render3';
import { templateSourceUrl } from '@angular/compiler';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fade',
    [
      state('void', style ({ opacity : 0}) ),
      transition(':enter', [ animate(3000)] ),
      transition(':leave', [ animate(5000)] ),
    ]
  )]
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }
  verProducto(idx: number) {
    this.router.navigate(['/producto', idx ]);
  }
  buscarCategoria( termino: string ) {
    console.log(termino);
    this.router.navigate( ['/buscar', termino]);
  }
}
