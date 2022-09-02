import { Route } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { NotFoundPage } from './pages/not-found/not-found.component';

export const coreRoutes: Route[] = [
  { path: '', component: HomePage, title: '' },
  {
    path: '**',
    component: NotFoundPage,
    title: $localize`:@@notFoundTitle:Oops`,
  },
];
