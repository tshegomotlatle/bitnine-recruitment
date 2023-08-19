import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'ui',
    loadChildren: () =>
      import('@bitnine-recruitment/ui').then((m) => m.UiModule),
  },
];
