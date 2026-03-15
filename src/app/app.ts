import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ListadoNotificaciones } from './listado-notificaciones/listado-notificaciones';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ListadoNotificaciones],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pwii-q1-2026');
  
      
}
