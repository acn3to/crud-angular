import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type2',
})
export class Type2Pipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Grass':
        return 'grass';
      case 'Fire':
        return 'whatshot';
      case 'Water':
        return 'water_drop';
      case 'Dark':
        return 'dark_mode';
      case 'Bug':
        return 'bug_report';
      case 'Dragon':
        return 'error';
      case 'Eletric':
        return 'bolt';
      case 'Fairy':
        return 'error';
      case 'Fighting':
        return 'error';
      case 'Flying':
        return 'error';
      case 'Fighting':
        return 'error';
      case 'Ghost':
        return 'error';
      case 'Ground':
        return 'error';
      case 'Fighting':
        return 'error';
      case 'Ice':
        return 'ac_unit';
      case 'Normal':
        return 'error';
      case 'Poison':
        return 'error';
      case 'Psychic':
        return 'error';
      case 'Rock':
        return 'error';
      case 'Steel':
        return 'error';
    }
    return 'normal_icon';
  }
}
