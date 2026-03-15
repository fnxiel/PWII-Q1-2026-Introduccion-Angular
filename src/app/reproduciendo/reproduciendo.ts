import { Component } from '@angular/core';
import { IArtista } from '../cancion/IArtista';
import { ICancion } from '../cancion/ICancion';
import { IPortada } from '../cancion/IPortada';
import { ListaReproduccion } from '../lista-reproduccion/lista-reproduccion';
import { Notificaciones } from '../notificaciones';

@Component({
  selector: 'app-reproduciendo',
  imports: [ListaReproduccion],
  templateUrl: './reproduciendo.html',
  styleUrl: './reproduciendo.css',
})
export class Reproduciendo {
  artista1: IArtista =
  {
    nombre: 'Filarmonica de Honduras',
    generosMusicales: ['Instrumental'],
    edad: '80',
    nombreArtistico: 'Orquesta Filarmonica de Honduras'
  }
  artista2: IArtista = 
  {
    nombre: 'Filarmonica de Londres',
    generosMusicales: ['Instrumental'],
    edad: '150',
    nombreArtistico: 'Orquesta Filarmonica de Londres'
  }
  artista3: IArtista = 
  {
    nombre: 'Grupo musical folklorico',
    generosMusicales: ['Folk'],
    edad: '25',
    nombreArtistico: 'Folklorico'
  }

  portada1: IPortada =
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Orquesta_Filarmónica_de_Honduras_en_Concierto.JPG',
    alt: 'Album orquesta filarmonica'
  }

  portada2: IPortada =
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Cadogan_Hall%2C_Sloane_Terrace%2C_SW1_-_interior_-_geograph.org.uk_-_1805137.jpg',
    alt: 'Album orquesta filarmonica londres'
  }

  portada3: IPortada =
  {
    src: 'https://i0.wp.com/www.hondurastips.hn/wp-content/uploads/2019/04/58.jpg?resize=768%2C512&ssl=1',
    alt: 'Album de musica folklorica'
  }

  canciones: ICancion[] =
  [
    {
      id: 1,
      nombre: 'Apertura',
      artista: this.artista1,
      portada: this.portada1,
      duracion: '2:30',
      destacada: true
    },
    {
      id: 2,
      nombre: 'Marcha imperial',
      artista: this.artista2,
      portada: this.portada2,
      duracion: '3:30',
      destacada: false
    },
    {
      id: 3,
      nombre: 'Mix de punta',
      artista: this.artista3,
      portada: this.portada3,
      duracion: '4:20',
      destacada: true
    },
    {
      id: 4,
      nombre: 'Merengue',
      artista: this.artista3,
      portada: this.portada3,
      duracion: '2:10',
      destacada: false
    },
    {
      id: 5,
      nombre: 'Mozart',
      artista: this.artista1,
      portada: this.portada1,
      duracion: '20:00',
      destacada: false
    },
    {
      id: 6,
      nombre: 'Himno nacional de Honduras',
      artista: this.artista1,
      portada: this.portada1,
      duracion: '5:00',
      destacada: false
    },
  ]

  constructor(public notificacionesService: Notificaciones){}
}
