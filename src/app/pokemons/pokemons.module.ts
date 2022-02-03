import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons/pokemons.component';

@NgModule({
  declarations: [
    PokemonsComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatTableModule
  ]
})
export class PokemonsModule { }
