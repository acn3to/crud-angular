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
    }
    return 'normal_icon';
  }
}
