import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './pipes/limitTo.pipe';

@NgModule({
  exports: [
    MaterialModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    TruncatePipe
  ],
  declarations: [
    TruncatePipe
  ],
  imports: [
    MaterialModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: []
})
export class SharedModule { }
