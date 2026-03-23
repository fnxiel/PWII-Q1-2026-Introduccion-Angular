import { Component, Input } from '@angular/core';
import { ICancion } from './ICancion';
import { IArtista } from './IArtista';
import { IPortada } from './IPortada';

@Component({
  selector: 'app-cancion',
  imports: [],
  templateUrl: './cancion.html',
  styleUrl: './cancion.css',
})
export class Cancion implements ICancion {
  @Input() id: number = 0;
  @Input() nombre: string = "Cancion de muestra";
  @Input() artista: IArtista = {
    nombre: 'Filarmonica de Honduras',
    generosMusicales: ['Instrumental'],
    edad: '80',
    nombreArtistico: 'Orquesta Filarmonica de Honduras'
  };
  @Input() portada: IPortada = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Orquesta_Filarmónica_de_Honduras_en_Concierto.JPG',
    alt: 'Album orquesta filarmonica'
  };
  @Input() duracion: string = "3:50";
  @Input() destacada: boolean = false;
}
