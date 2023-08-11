import { NgModule } from '@angular/core';
import { FlexiFieldsComponent } from './flexi-fields.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FlexiFieldsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: [
    FlexiFieldsComponent
  ]
})
export class FlexiFieldsModule { }
