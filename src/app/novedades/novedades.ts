import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INovedad } from './INovedad';
import { Notificaciones } from '../notificaciones';

@Component({
  selector: 'app-novedades',
  imports: [],
  templateUrl: './novedades.html',
  styleUrl: './novedades.css',
})
export class Novedades implements OnInit{
  
  novedades: INovedad[] = [
    {
      id: 1,
      titulo: 'Nuevo concierto',
      descripcion: 'Concierto sinfonico'
    },
    {
      id: 2,
      titulo: 'Concierto en SPS',
      descripcion: 'Gran concierto anual'
    },
    {
      id: 3,
      titulo: 'Noche de jazz',
      descripcion: 'Grupo musical en vivo'
    }
  ]
  novedadesFiltrado?: INovedad[]

  //Inyeccion de dependencias
  constructor(public ruta: ActivatedRoute, public notificacionesService: Notificaciones){}

  filtrarNovedades(id: number){
    this.novedadesFiltrado = this.novedades.filter(novedad => novedad.id === id)
  }


  ngOnInit(): void {
    this.novedadesFiltrado = this.novedades
    this.ruta.queryParams.subscribe(params =>{
      console.log(params)

      if(params['id']){
        this.filtrarNovedades(Number(params['id']))
      }
    })
  }
  
}

