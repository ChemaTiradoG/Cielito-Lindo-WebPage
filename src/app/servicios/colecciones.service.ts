import { Injectable } from '@angular/core';
@Injectable()
export class ColeccionesService {

    private colecciones: Producto[] = [
    {
      nombre: 'DIJE ORO 14K',
      descripcion: 'DIJE ORO 14K OPALO MEXICANO IRREG 18CT DIAMANTES LADO Y ONDAS.',
      img: 'assets/img/categorias/dije.png',
      codigo: '160300063',
      material: 'Oro',
      categoria: 'Dije',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'DIJE ORO 14K',
      descripcion: 'DIJE ORO 14K OPALO MEXICANO IRREG 18CT DIAMANTES LADO Y ONDAS.',
      img: 'assets/img/categorias/dije.png',
      codigo: '160300063',
      material: 'Oro',
      categoria: 'Dije',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'DIJE ORO 14K',
      descripcion: 'DIJE ORO 14K OPALO MEXICANO IRREG 18CT DIAMANTES LADO Y ONDAS.',
      img: 'assets/img/categorias/dije.png',
      codigo: '160300063',
      material: 'Oro',
      categoria: 'Dije',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'DIJE ORO 14K',
      descripcion: 'DIJE ORO 14K OPALO MEXICANO IRREG 18CT DIAMANTES LADO Y ONDAS.',
      img: 'assets/img/categorias/dije.png',
      codigo: '160300063',
      material: 'Oro',
      categoria: 'Dije',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'DIJE ORO 14K',
      descripcion: 'DIJE ORO 14K OPALO MEXICANO IRREG 18CT DIAMANTES LADO Y ONDAS.',
      img: 'assets/img/categorias/dije.png',
      codigo: '160300063',
      material: 'Oro',
      categoria: 'Dije',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'DIJE ORO 14K',
      descripcion: 'DIJE ORO 14K OPALO MEXICANO IRREG 18CT DIAMANTES LADO Y ONDAS.',
      img: 'assets/img/categorias/dije.png',
      codigo: '160300063',
      material: 'Oro',
      categoria: 'Dije',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'DIJE ORO 14K',
      descripcion: 'DIJE ORO 14K OPALO MEXICANO IRREG 18CT DIAMANTES LADO Y ONDAS.',
      img: 'assets/img/categorias/dije.png',
      codigo: '160300063',
      material: 'Oro',
      categoria: 'Dije',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'DIJE ORO 14K',
      descripcion: 'DIJE ORO 14K OPALO MEXICANO IRREG 18CT DIAMANTES LADO Y ONDAS.',
      img: 'assets/img/categorias/dije.png',
      codigo: '160300063',
      material: 'Oro',
      categoria: 'Dije',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'DIJE ORO 14K',
      descripcion: 'DIJE ORO 14K OPALO MEXICANO IRREG 18CT DIAMANTES LADO Y ONDAS.',
      img: 'assets/img/categorias/dije.png',
      codigo: '160300063',
      material: 'Oro',
      categoria: 'Dije',
      pureza: '14k',
      destacado: false
    }
  ];

    constructor() {
        console.log('Servicio listo para usar!!!');
     }

     getColecciones(): Producto[] {
         return this.colecciones;
     }

     getProducto(idx: string) {
       return this.colecciones[idx];
     }

     buscarColecciones( termino: string ): Producto[] {

      let coleccionesArr: Producto[] = [];
      termino = termino.toLowerCase();

      for ( let i =0; i < this.colecciones.length; i++ ) {

        let producto = this.colecciones[i];
         let nombre = producto.nombre.toLowerCase();

         if ( nombre.indexOf( termino ) >= 0) {
          producto.idx = i;
          coleccionesArr.push( producto );
         }
       }
       return coleccionesArr;
     }

}

export interface Producto {
  nombre: string;
  descripcion: string;
  img: string;
  codigo: string;
  material: string;
  categoria: string;
  pureza: string;
  destacado: boolean;
  idx?: number;
}
