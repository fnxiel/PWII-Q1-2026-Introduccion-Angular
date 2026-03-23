import { Routes } from '@angular/router';
import { Reproduciendo } from './reproduciendo/reproduciendo';
import { Novedades } from './novedades/novedades';
import { Pokedex } from './pokedex/pokedex';
import { Pokemon } from './pokemon/pokemon';

export const routes: Routes = [
    {
        path: '', component: Reproduciendo
    },
    {
        path: 'novedades', component: Novedades
    },
    {
        path:'pokedex', component: Pokedex
    },
    {
        path:'pokemon', component: Pokemon
    }
];
