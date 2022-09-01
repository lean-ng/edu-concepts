import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { timelineRoutes } from './timeline.routes';

@NgModule({
  imports: [RouterModule.forChild(timelineRoutes)],
})
export class TimelineModule {}
