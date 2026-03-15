import { Injectable } from '@angular/core';
import { INotificacion } from './INotificacion';

@Injectable({
  providedIn: 'root',
})
export class Notificaciones {
  notificaciones: INotificacion[] = []

  agregarNotificacion(titulo: string){
    this.notificaciones.push({
      titulo: titulo,
      descripcion: 'Nueva notificacion',
      tipo: 'Informacion'
    })
  }
  
  limpiarNotificaciones(){
    this.notificaciones = []
  }
}


