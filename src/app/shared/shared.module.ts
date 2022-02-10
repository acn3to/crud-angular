import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { Type1Pipe } from './pipes/type1.pipe';
import { Type2Pipe } from './pipes/type2.pipe';

@NgModule({
  declarations: [ErrorDialogComponent, Type1Pipe, Type2Pipe],
  imports: [CommonModule, AppMaterialModule],
  exports: [ErrorDialogComponent, Type1Pipe, Type2Pipe],
})
export class SharedModule {}
