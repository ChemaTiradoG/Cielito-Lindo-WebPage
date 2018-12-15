import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  index: String;


  constructor() { }
  ngOnInit() { }

  guardarDatos() {
      const tmpNombre = <HTMLInputElement> document.getElementById('txtNombre');
      const tmpCorreo = <HTMLInputElement> document.getElementById('txtCorreo');
      const tmpTelefono = <HTMLInputElement> document.getElementById('txtTelefono');
      const tmpMensaje = <HTMLInputElement> document.getElementById('txtMensaje');
      const d: Date = new Date();
      let validate: Number;
      let tmp: any;
      const datos = {
          nombre: tmpNombre.value,
          correo: tmpCorreo.value,
          telefono: tmpTelefono.value,
          mensaje: tmpMensaje.value,
          fecha: d
      };
      if (this.index) {
          // tslint:disable-next-line:no-shadowed-variable
          const http = new XMLHttpRequest();
          http.onreadystatechange = function() {
              if (this.readyState === 4 && this.status === 200) {
                console.log(JSON.parse(this.responseText));
              }
          };
            http.open('PUT', 'https://cielitolindo-377ae.firebaseio.com/datos.json' + this.index + '.json');
            http.setRequestHeader('Content-Type', 'application/json');
            http.send(JSON.stringify(datos));
      } else {
          const http = new XMLHttpRequest();
          http.onreadystatechange = function() {
              if (this.readyState === 4 && this.status === 200) {
                console.log('si entro');
              } else {
                console.log('no entro');
              }
          };
          http.open('POST', 'https://cielitolindo-377ae.firebaseio.com/datos.json', true);
          http.setRequestHeader('Content-Type', 'application/json');
          http.send(JSON.stringify(datos));
      }

      if (validate === 1) {
        tmp = document.getElementById('mGuardado');
        tmp.classList.add('invisible');
        tmp =  document.getElementById('mNoGuardado');
         tmp.classList.remove('visible');
      } else if (validate === 2) {

      }
  }

    validar() {
      const tmpNombre = <HTMLInputElement> document.getElementById('txtNombre');
      const tmpCorreo = <HTMLInputElement> document.getElementById('txtCorreo');
      const tmpMensaje = <HTMLInputElement> document.getElementById('txtMensaje');
      let error;
      error = document.getElementById('mensajeError');
      if (tmpMensaje.value === '') {
          tmpMensaje.classList.add('is-danger');
          document.getElementById('txtMensaje').focus();
          error.classList.add('visible');
          error.classList.remove('invisible');
      } else {
          tmpMensaje.classList.remove('is-danger');
          error.classList.add('invisible');
          error.classList.remove('visible');
      }
      error = document.getElementById('correoError');
      if (tmpCorreo.value === '') {
          tmpCorreo.classList.add('is-danger');
          document.getElementById('txtCorreo').focus();
          error.classList.add('visible');
          error.classList.remove('invisible');
      } else {
          tmpCorreo.classList.remove('is-danger');
          error.classList.add('invisible');
          error.classList.remove('visible');
      }
      error = document.getElementById('nombreError');
      if (tmpNombre.value === '') {
          tmpNombre.classList.add('is-danger');
          document.getElementById('txtNombre').focus();
          error.classList.add('visible');
          error.classList.remove('invisible');
      } else {
          tmpNombre.classList.remove('is-danger');
          error.classList.add('invisible');
          error.classList.remove('visible');
      }
      if (tmpMensaje.value !== '' && tmpCorreo.value !== '' && tmpNombre.value !== '' ) {
          this.guardarDatos();
      }
  }
}
