import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type1'
})
export class Type1Pipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'Grass': return 'grass';
      case 'Fire': return 'whatshot';
      case 'Water': return 'water_drop'
    }
    return 'normal_icon';
  }

}
