import { Route } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

export const uiRoutes: Route[] = [
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
  {path: "login", pathMatch: "full", component: NavigationComponent}
];
