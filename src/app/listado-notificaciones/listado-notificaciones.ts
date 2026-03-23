import { Component } from '@angular/core';
import { Notificaciones } from '../notificaciones';

@Component({
  selector: 'app-listado-notificaciones',
  imports: [],
  templateUrl: './listado-notificaciones.html',
  styleUrl: './listado-notificaciones.css',
})
export class ListadoNotificaciones {
  constructor(public notificacionesService: Notificaciones){}
}
