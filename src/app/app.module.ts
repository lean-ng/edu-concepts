import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  // Components, directives and pipes
  declarations: [AppComponent],
  // Bootstrap components
  bootstrap: [AppComponent],
  // Services provided
  providers: [],
  // Imported modules (with declarations and providers)
  imports: [BrowserModule, CoreModule, RouterModule.forRoot([])],
})
export class AppModule {}
