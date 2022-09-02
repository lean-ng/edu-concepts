import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { timelineRoutes } from './timeline.routes';
import { HomePage } from './pages/home/home.component';

@NgModule({
  declarations: [HomePage],
  imports: [RouterModule.forChild(timelineRoutes)],
})
export class TimelineModule {}
