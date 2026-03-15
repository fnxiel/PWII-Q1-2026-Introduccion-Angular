import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICancion } from '../cancion/ICancion';
import { Cancion } from '../cancion/cancion';

@Component({
  selector: 'app-lista-reproduccion',
  imports: [
    Cancion,
    FormsModule
  ],
  templateUrl: './lista-reproduccion.html',
  styleUrl: './lista-reproduccion.css',
})
export class ListaReproduccion implements OnInit {
  @Input() canciones?: ICancion[]
  cancionesFiltradas?: ICancion[] = []
  cantidadCanciones: number = 2

  constructor(){
    console.log("Ejecutando el constructor")
  }

  ngOnInit(): void {
    console.log("Ejecutando OnInit")
    this.filtrarCanciones()
  }

  filtrarCanciones(){
    this.cancionesFiltradas = this.canciones?.slice(0, this.cantidadCanciones) //Obtener los primeros X registros de un arreglo
    console.log(this.cancionesFiltradas)
  }

  agregarCancion(){
    this.canciones?.push({
      id: 0,
      nombre: 'Desde boton',
      artista: {
        nombre: 'Boton',
        generosMusicales: [],
        edad: '30',
        nombreArtistico: 'Boton'
      },
      portada: {
        src: 'https://www.praisecharts.com/themes/praisecharts/images/layout/music-placeholder.png',
        alt: ''
      },
      duracion: '30 min',
      destacada: false
    })
    this.filtrarCanciones()
  }


}
