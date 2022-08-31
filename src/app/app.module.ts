import { ErrorHandler, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SimpleErrorHandler } from './services/SimpleErrorHandler';

@NgModule({
  // Components, directives and pipes
  declarations: [AppComponent],
  // Bootstrap components
  bootstrap: [AppComponent],
  // Services provided
  providers: [
    { provide: ErrorHandler, useClass: SimpleErrorHandler }
  ]
})
export class AppModule {}
