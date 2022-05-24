import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { HideAfterDirective } from './hideAfter.directive';
//import { SizerComponent } from './sizer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
    HideAfterDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
