import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  index: any;

  constructor() { }

  ngOnInit() {
  }

  guardarDatos() {
      const tmpNombreCompleto = <HTMLInputElement> document.getElementById('txtNombreCompleto');
      const tmpDireccion = <HTMLInputElement> document.getElementById('txtDireccion');
      const datos = {
          nombreCompleto: tmpNombreCompleto.value,
          direccion: tmpDireccion.value,
      };
      if (this.index) {
          // tslint:disable-next-line:no-shadowed-variable
          const http = new XMLHttpRequest();
          http.onreadystatechange = function() {
              if (this.readyState === 4 && this.status === 200) {
                  // console.log(JSON.parse(this.responseText));
              }
          };
          http.open('PUT', 'https://cielitolindo-377ae.firebaseio.com/datos.json' + this.index + '.json');
          http.setRequestHeader('Content-Type', 'application/json');
          http.send(JSON.stringify(datos));
      } else {
          const http = new XMLHttpRequest();
          http.onreadystatechange = function() {
              if (this.readyState === 4 && this.status === 200) {
                  // document.getElementById("formulario").reset();
              }
          };
          http.open('POST', 'https://cielitolindo-377ae.firebaseio.com/datos.json', true);
          http.setRequestHeader('Content-Type', 'application/json');
          http.send(JSON.stringify(datos));
      }
      alert('Datos guardados');
      location.href = 'index.html';
  }

    validar() {
      const tmpNombreCompleto = <HTMLInputElement> document.getElementById('txtNombreCompleto');
      const tmpDireccion = <HTMLInputElement> document.getElementById('txtNombreCompleto');
      document.getElementById('txtNombreCompleto').style.border = '2px solid black';
      document.getElementById('txtDireccion').style.border = '2px solid red';
      if (tmpNombreCompleto.value === '') {
          document.getElementById('txtNombreCompleto').style.border = '2px solid red';
          document.getElementById('txtNombreCompleto').focus();
      } else if (tmpDireccion.value === '') {
          document.getElementById('txtDireccion').style.border = '2px solid red';
          document.getElementById('txtDireccion').focus();
      } else {
          this.guardarDatos();
      }
  }
}
