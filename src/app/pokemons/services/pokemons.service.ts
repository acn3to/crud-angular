import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private httpClient: HttpClient) {}

  list(): Pokemon[] {
    return [
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
  }
}
