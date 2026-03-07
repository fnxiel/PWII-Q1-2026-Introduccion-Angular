import { Component, Input } from '@angular/core';
import { ICancion } from '../cancion/ICancion';
import { Cancion } from '../cancion/cancion';

@Component({
  selector: 'app-lista-reproduccion',
  imports: [
    Cancion
  ],
  templateUrl: './lista-reproduccion.html',
  styleUrl: './lista-reproduccion.css',
})
export class ListaReproduccion {
  @Input() canciones?: ICancion[]
}
