import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon';
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [
    {
      _id: '1',
      name: 'Bulbasaur',
      type1: 'Grass',
      type2: 'Poison',
      healthPoint: 45,
      attack: 49,
      speed: 45,
    },
  ];
  displayedColumns = [
    'name',
    'type1',
    'type2',
    'healthPoint',
    'attack',
    'speed',
  ];

  constructor() {
    //this.pokemons = [];
  }

  ngOnInit(): void {}
}
