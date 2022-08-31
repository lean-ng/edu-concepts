import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './components/app-header/app-header.component';

@NgModule({
  // Components, directives and pipes
  declarations: [AppHeaderComponent],
  // Services provided
  providers: [],
  // Exported declarations and modules
  exports: [AppHeaderComponent],
})
export class CoreModule {}
