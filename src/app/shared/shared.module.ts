import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { Type1Pipe } from './pipes/type1.pipe';

@NgModule({
  declarations: [ErrorDialogComponent, Type1Pipe],
  imports: [CommonModule, AppMaterialModule],
  exports: [ErrorDialogComponent, Type1Pipe],
})
export class SharedModule {}
