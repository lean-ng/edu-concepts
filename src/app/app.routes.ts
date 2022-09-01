import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  // Lazy routed modules
  {
    path: 'timeline',
    loadChildren: () =>
      import('./timeline/timeline.module').then((m) => m.TimelineModule),
  },
];
