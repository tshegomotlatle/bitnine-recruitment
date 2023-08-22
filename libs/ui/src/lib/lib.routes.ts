import { Route } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PalindroneComponent } from './palindrone/palindrone.component';
import { MissingNumberComponent } from './missing-number/missing-number.component';
import { ClockComponent } from './clock/clock.component';
import { ProfileComponent } from './profile/profile.component';
import { authGaurd } from 'libs/services/src/lib/auth/auth.guard';
export const uiRoutes: Route[] = [
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
  // {path: "login", pathMatch: "full", component: NavigationComponent},
  // {path: "**", pathMatch: "full", redirectTo: "/Product"},
  { path: 'Home', pathMatch: 'full', component: HomeComponent },
  { path: 'Login', pathMatch: 'full', component: LoginComponent },
  { path: 'Question-6-1', pathMatch: 'full', component: PalindroneComponent },
  {
    path: 'Question-6-2',
    pathMatch: 'full',
    component: MissingNumberComponent,
  },
  { path: 'Question-6-3', pathMatch: 'full', component: ClockComponent },
  {
    path: 'Profile',
    pathMatch: 'full',
    component: ProfileComponent,
    canActivate: [authGaurd],
  },
  { path: 'test', pathMatch: 'full', component: TestComponent },
];
