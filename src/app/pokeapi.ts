import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListadoPokemon } from './pokedex/IListadoPokemon';
import { IPokemonDetalle } from './pokemon/IPokemonDetalle';

@Injectable({
  providedIn: 'root',
})
export class Pokeapi {
  private urlBase: string = 'https://pokeapi.co/api/v2'

  constructor(private cliente: HttpClient){}

  getPokemons(limite: number = 150): Observable<IListadoPokemon>{
    try {
      return this.cliente.get<IListadoPokemon>(`${this.urlBase}/pokemon/?limit=${limite}`)
    } catch (error) {
      console.error('Error al obtener los pokemons:', error);
      throw error; // Re-lanzar el error para que pueda ser manejado por el componente
    }
    
  }

  getPokemon(url: string): Observable<IPokemonDetalle>{
    try {
      return this.cliente.get<IPokemonDetalle>(url)
    } catch (error) {
      console.error('Error al obtener el pokemon:', error);
      throw error; // Re-lanzar el error para que pueda ser manejado por el componente
    }
  }

}
