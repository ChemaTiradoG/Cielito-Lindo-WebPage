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

  buscarHeroe( termino: string ) {
    // console.log(termino);
    this.router.navigate( ['/buscar', termino]);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 238) {
      const element = document.getElementById('logo');
      element.classList.add('logo-visible');
    } else if (window.pageYOffset <= 167) {
     const element = document.getElementById('logo');
       element.classList.remove('logo-visible');
    }
 }

}
