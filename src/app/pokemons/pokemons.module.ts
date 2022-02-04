import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons/pokemons.component';

@NgModule({
  declarations: [PokemonsComponent],
  imports: [CommonModule, PokemonsRoutingModule, AppMaterialModule],
})
export class PokemonsModule {}
