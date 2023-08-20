import { Route } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { TestComponent } from './test/test.component';

export const uiRoutes: Route[] = [
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
  {path: "login", pathMatch: "full", component: NavigationComponent},
  {path: "test", pathMatch: "full", component: TestComponent}
];
