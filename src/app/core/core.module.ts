import { NgModule } from '@angular/core';
import { HeaderMainComponent } from 'src/app/core/components/header-main/header-main.component';
import { FooterMainComponent } from 'src/app/core/components/footer-main/footer-main.component';

@NgModule({
  exports: [
    HeaderMainComponent,
    FooterMainComponent
  ],
  declarations: [
    HeaderMainComponent,
    FooterMainComponent
  ]
})
export class CoreModule { }
