import { Component, OnInit } from '@angular/core';
import { IPokemonDetalle } from './IPokemonDetalle';
import { Pokeapi } from '../pokeapi';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  imports: [RouterLink],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon implements OnInit {
  url: string = ''
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

  constructor(public pokeapiService: Pokeapi, public ruta: ActivatedRoute){}

  ngOnInit(): void {
    this.ruta.queryParams.subscribe(params =>{
      if(params['url']){
        this.url = params['url']
        console.log(this.url)
        this.pokeapiService.getPokemon(this.url).subscribe(result =>
      {
        this.pokemon = result
        console.log(result)
      })
      }
    })
    
    
  }
  
}
