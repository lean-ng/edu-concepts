import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { coreRoutes } from './core.routes';

@NgModule({
  // Components, directives and pipes
  declarations: [AppHeaderComponent],
  // Services provided
  providers: [],
  // Imported modules (with declarations and providers)
  imports: [RouterModule.forChild(coreRoutes)],

  // Exported declarations and modules
  exports: [AppHeaderComponent],
})
export class CoreModule {}
