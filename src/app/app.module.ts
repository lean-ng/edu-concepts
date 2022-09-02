import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, TitleStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './core/components/app-header/app-header.component';

import { PageTitleService } from './core/services/page-title.service';

import { appRoutes } from './app.routes';

@NgModule({
  // Components, directives and pipes
  declarations: [AppComponent, AppHeaderComponent],
  // Bootstrap components
  bootstrap: [AppComponent],
  // Services provided
  providers: [{ provide: TitleStrategy, useClass: PageTitleService }],
  // Imported modules (with declarations and providers)
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
})
export class AppModule {}
