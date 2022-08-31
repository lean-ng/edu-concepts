import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './core/components/app-header/app-header.component';

@NgModule({
  // Components, directives and pipes
  declarations: [AppComponent, AppHeaderComponent],
  // Bootstrap components
  bootstrap: [AppComponent],
  // Services provided
  providers: [],
  // Imported modules (with declarations and providers)
  imports: [BrowserModule],
})
export class AppModule {}
