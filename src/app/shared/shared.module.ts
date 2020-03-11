import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';

@NgModule({
  exports: [
    MaterialModule,
  ],
  declarations: [
  ],
  imports: [
    MaterialModule
  ],
  providers: []
})
export class SharedModule { }
