import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { template } from '@angular/core/src/render3';
import { templateSourceUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade',
    [
      state('void', style ({ opacity : 0}) ),
      transition(':enter', [ animate(3000)] ),
      transition(':leave', [ animate(5000)] ),
    ]
  )]
})
export class AppComponent  implements OnInit {

  constructor( @Inject(DOCUMENT) document,
   ) { }

ngOnInit () {}


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 238) {
      const element = document.getElementById('navbar');
      element.classList.add('sticky');
    } else if (window.pageYOffset <= 167) {
     const element = document.getElementById('navbar');
       element.classList.remove('sticky');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 991) {
      const element = document.getElementById('navbar');
      element.classList.remove('todo-centro');
    } else if (event.target.innerWidth > 991) {
      const element = document.getElementById('navbar');
      element.classList.add('todo-centro');
    }
  }

}
