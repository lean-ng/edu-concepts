import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  // Components, directives and pipes
  declarations: [AppComponent],
  // Bootstrap components
  bootstrap: [AppComponent],
  // Services provided
  providers: [],
  // Imported modules (with declarations and providers)
  imports: [BrowserModule]
})
export class AppModule {}
