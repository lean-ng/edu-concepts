import { Route } from '@angular/router';

import { HomePage } from './core/pages/home/home.component';
import { NotFoundPage } from './core/pages/not-found/not-found.component';

export const appRoutes: Route[] = [
  // Lazy routed modules
  {
    path: 'timeline',
    loadChildren: () =>
      import('./timeline/timeline.module').then((m) => m.TimelineModule),
  },
  { path: '', component: HomePage, title: '' },
  {
    path: '**',
    component: NotFoundPage,
    title: $localize`:@@notFoundTitle:Oops`,
  },
];
