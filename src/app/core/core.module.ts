import { NgModule } from '@angular/core';
import { RouterModule, TitleStrategy } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { coreRoutes } from './core.routes';
import { PageTitleService } from './services/page-title.service';

@NgModule({
  // Components, directives and pipes
  declarations: [AppHeaderComponent],
  // Services provided
  providers: [{ provide: TitleStrategy, useClass: PageTitleService }],
  // Imported modules (with declarations and providers)
  imports: [RouterModule.forChild(coreRoutes)],

  // Exported declarations and modules
  exports: [AppHeaderComponent],
})
export class CoreModule {}
