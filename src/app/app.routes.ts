import { Routes } from '@angular/router';
import { Reproduciendo } from './reproduciendo/reproduciendo';
import { Novedades } from './novedades/novedades';
import { Pokedex } from './pokedex/pokedex';

export const routes: Routes = [
    {
        path: '', component: Reproduciendo
    },
    {
        path: 'novedades', component: Novedades
    },
    {
        path:'pokedex', component: Pokedex
    }
];
