import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  // Components, directives and pipes
  declarations: [AppComponent],
  // Bootstrap components
  bootstrap: [AppComponent],
  // Services provided
  providers: [],
  // Imported modules (with declarations and providers)
  imports: [BrowserModule, CoreModule],
})
export class AppModule {}
