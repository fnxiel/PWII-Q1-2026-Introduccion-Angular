import { Component, Input, OnInit } from '@angular/core';
import { IPokemonDetalle } from './IPokemonDetalle';
import { Pokeapi } from '../pokeapi';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon implements OnInit {
  @Input() url: string = ''
  pokemon: IPokemonDetalle = {
    id: 0,
    name: '',
    height: 0,
    weight: 0,
    sprites: {
      front_default: '',
      back_default: ''
    }
  }

  constructor(public pokeapiService: Pokeapi){}

  ngOnInit(): void {
    this.pokeapiService.getPokemon(this.url).subscribe(result =>
      {
        this.pokemon = result
        console.log(result)
      })
    
  }
  
}
