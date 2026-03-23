import { Component, OnInit } from '@angular/core';
import { Pokeapi } from '../pokeapi';
import { IListadoPokemon } from './IListadoPokemon';
import { Pokemon } from '../pokemon/pokemon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  imports: [RouterLink],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css',
})
export class Pokedex implements OnInit {
  conteo: number = 151
  pokemons: IListadoPokemon = {
    count: 0,
    next: '',
    previous: null,
    results: []
  }

  constructor(public pokeapiService: Pokeapi){}

  ngOnInit(): void {
    this.pokeapiService.getPokemons(this.conteo).subscribe(result => {
      console.log(result)
      this.pokemons = result
    })
  }

}
