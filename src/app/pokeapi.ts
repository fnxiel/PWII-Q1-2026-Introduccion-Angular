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
    return this.cliente.get<IListadoPokemon>(`${this.urlBase}/pokemon/?limit=${limite}`)
  }

  getPokemon(url: string): Observable<IPokemonDetalle>{
    return this.cliente.get<IPokemonDetalle>(url)
  }

}
