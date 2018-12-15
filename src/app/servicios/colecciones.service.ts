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
      categoria: 'Dijes',
      pureza: '14K',
      destacado: false
    },
    {
      nombre: 'ANILLO ORO 14K',
      descripcion: 'ANILLO ORO 14K OPALO MEXICANO FACETADO TRILLANTE CON DIAMANTES.',
      img: 'assets/img/categorias/anillo-de-fuego.png',
      codigo: '160100183',
      material: 'Oro',
      categoria: 'Anillos',
      pureza: '14K',
      destacado: false
    },
    {
      nombre: 'ESCULTURA OBSIDIANA',
      descripcion: 'ESCULTURA OBSIDIANA CON PLATA GUERRERO AZTECA DIF PIEDRAS.',
      img: 'assets/img/categorias/azteca.png',
      codigo: '727710527',
      material: 'Plata',
      categoria: 'Esculturas',
      pureza: '0.925',
      destacado: false
    },
    {
      nombre: 'WC391 ARETES DE ORO BLANCO CON DIAMANTES',
      descripcion: 'WC391 ARETES DE ORO BLANCO CON DIAMANTES F141335.',
      img: 'assets/img/categorias/aretes.png',
      codigo: '115100010',
      material: 'Oro blanco',
      categoria: 'Aretes',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'ANILLO 18K ORO BLANCO SOLO ARGOLLA / LO ACOMPARA',
      descripcion: 'ANILLO 18K ORO BLANCO SOLO ARGOLLA / LO ACOMPARA',
      img: 'assets/img/categorias/110300044.jpg',
      codigo: '110300044',
      material: 'Oro blanco',
      categoria: 'Anillos',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'ANILLO 14K ORO BLANCO C/ DIAMANTES CORTE REDONDO O BRILLANTE',
      descripcion: 'ANILLO 14K ORO BLANCO C/ DIAMANTES CORTE REDONDO O BRILLANTE',
      img: 'assets/img/categorias/112200036.jpg',
      codigo: '112200036',
      material: 'Oro blanco',
      categoria: 'Anillos',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'Anillo 14K oro blanco diamantre corte baguete y corte brillante',
      descripcion: 'ANILLO 14K ORO BLANCO DIAMANTRE CORTE BAGUETE Y CORTE BRILLANTE',
      img: 'assets/img/categorias/115000028.jpg',
      codigo: '115000028',
      material: 'Oro blanco',
      categoria: 'Anillos',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'ANILLO 14K ORO BLANCO CON ZAFIROS ROJOS Y DIAMANTES',
      descripcion: 'ANILLO 14K ORO BLANCO CON ZAFIROS ROJOS Y DIAMANTES',
      img: 'assets/img/categorias/115000066.jpg',
      codigo: '115000066',
      material: 'Oro blanco',
      categoria: 'Anillos',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'ANILLO 14K ORO BLANCO DIAMANTES Y ZAFIRO ROSA',
      descripcion: 'ANILLO 14K ORO BLANCO DIAMANTES Y ZAFIRO ROSA',
      img: 'assets/img/categorias/115000128.jpg',
      codigo: '115000128',
      material: 'Oro blanco',
      categoria: 'Anillos',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'ANILLO 14K ORO BLANCO DIAMANTES Y ZAFIRO ROSA',
      descripcion: 'ANILLO 14K ORO BLANCO DIAMANTES Y ZAFIRO ROSA',
      img: 'assets/img/categorias/115000131.jpg',
      codigo: '115000131',
      material: 'Oro blanco',
      categoria: 'Anillos',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'ANILLO 14K ORO BLANCO DIAMANTES Y ESMERALDA',
      descripcion: 'ANILLO 14K ORO BLANCO DIAMANTES Y ESMERALDA',
      img: 'assets/img/categorias/160100207.jpg',
      codigo: '160100207',
      material: 'Oro blanco',
      categoria: 'Anillos',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'PIEZA DIAMANTE CORTE BAGUET. PIEZA AL CENTRO CORTE REDONDO O CORTE BRILLANTE',
      descripcion: 'PIEZA DIAMANTE CORTE BAGUET. PIEZA AL CENTRO CORTE REDONDO O CORTE BRILLANTE',
      img: 'assets/img/categorias/331810013.jpg',
      codigo: '331810013',
      material: 'Diamante',
      categoria: 'Piezas',
      pureza: 'N/A',
      destacado: false
    },
    {
      nombre: 'ANILLO 14K ORO BLANCO DIAMANTE EN CORTE REDONDO C/ GRABADOS Y RELIEVES',
      descripcion: 'ANILLO 14K ORO BLANCO DIAMANTE EN CORTE REDONDO C/ GRABADOS Y RELIEVES',
      img: 'assets/img/categorias/170200050.jpg',
      codigo: '170200050',
      material: 'Oro blanco',
      categoria: 'Anillos',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'ANILLO 14K ORO AMARILLO DIAMANTES ALREDEDOR ESMERALDA EN EL CENTRO',
      descripcion: 'ANILLO 14K ORO AMARILLO DIAMANTES ALREDEDOR ESMERALDA EN EL CENTRO',
      img: 'assets/img/categorias/160100215.jpg',
      codigo: '160100215',
      material: 'Oro',
      categoria: 'Anillos',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'ANILLO 14K ORO AMARILLO DIAMANTES 5 ACOMPAÑADA DE ESMERALDA CORTE PERA',
      descripcion: 'ANILLO 14K ORO AMARILLO DIAMANTES 5 ACOMPAÑADA DE ESMERALDA CORTE PERA',
      img: 'assets/img/categorias/160100094.jpg',
      codigo: '160100094',
      material: 'Oro',
      categoria: 'Anillos',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'ANILLO 14K ORO AMARILLO C/ HOJAS A LOS COSTADOS  Y ACOMPAÑADO DE ESMERALDA CORTE ',
      descripcion: 'ANILLO 14K ORO AMARILLO C/ HOJAS A LOS COSTADOS  Y ACOMPAÑADO DE ESMERALDA CORTE ',
      img: 'assets/img/categorias/170200067.jpg',
      codigo: '170200067',
      material: 'Oro',
      categoria: 'Anillos',
      pureza: '14k',
      destacado: false
    },
    {
      nombre: 'ANILLO 14K ORO AMARILLO C/ DIAMANTES CORTE BRILLANTE ACOMPAÑADA DE ESMERALDA',
      descripcion: 'ANILLO 14K ORO AMARILLO C/ DIAMANTES CORTE BRILLANTE ACOMPAÑADA DE ESMERALDA',
      img: 'assets/img/categorias/170200070.jpg',
      codigo: '170200070',
      material: 'Oro',
      categoria: 'Anillos',
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
        let categoria = producto.categoria.toLowerCase();

         if ( nombre.indexOf( termino ) >= 0) {
          producto.idx = i;
          coleccionesArr.push( producto );
         } else if ( categoria.indexOf( termino ) >= 0) {
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
