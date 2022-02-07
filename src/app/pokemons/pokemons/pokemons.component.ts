import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Pokemon } from '../model/pokemon';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  pokemons: Observable<Pokemon[]>;
  displayedColumns = [
    'name',
    'type1',
    'type2',
    'healthPoint',
    'attack',
    'speed',
  ];

  //pokemonsService: PokemonsService;

  constructor(private pokemonsService: PokemonsService) {
    //this.pokemons = [];
    //this.pokemonsService = new PokemonsService();
    this.pokemons = this.pokemonsService.list();
  }

  ngOnInit(): void {}
}
