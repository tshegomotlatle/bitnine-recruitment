import { Route } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const uiRoutes: Route[] = [
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
  // {path: "login", pathMatch: "full", component: NavigationComponent},
  // {path: "**", pathMatch: "full", redirectTo: "/Product"},
  {path: "Home", pathMatch: "full", component: HomeComponent},
  {path: "Login", pathMatch: "full", component: LoginComponent},
  {path: "test", pathMatch: "full", component: TestComponent }
];
