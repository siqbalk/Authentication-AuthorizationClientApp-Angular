import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from 'src/app/spinner/spinner.component';
import { Focus } from 'src/app/directives/focus.directive';



@NgModule({
  imports:      [CommonModule],
  declarations: [Focus, SpinnerComponent],
  exports:      [Focus, SpinnerComponent],
  providers:    []
})
export class SharedModule { }
