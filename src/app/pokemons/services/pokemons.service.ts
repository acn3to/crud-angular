import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../model/pokemon';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private readonly API = './assets/apokemons.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Pokemon[]>(this.API).pipe(
      first(),
      delay(100000),
      tap((pokemons) => console.log(pokemons))
    );
  }
}
