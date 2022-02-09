import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Pokemon } from '../model/pokemon';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  pokemons$: Observable<Pokemon[]>;
  displayedColumns = [
    'name',
    'type1',
    'type2',
    'healthPoint',
    'attack',
    'speed',
  ];

  //pokemonsService: PokemonsService;

  constructor(
    public dialog: MatDialog,
    private pokemonsService: PokemonsService
  ) {
    //this.pokemons = [];
    //this.pokemonsService = new PokemonsService();
    this.pokemons$ = this.pokemonsService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar os Pokemons.');
        return of([]);
      })
    );
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}
}
