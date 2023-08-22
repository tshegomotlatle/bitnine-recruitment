import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { uiRoutes } from './lib.routes';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { PalindroneComponent } from './palindrone/palindrone.component';
import { MissingNumberComponent } from './missing-number/missing-number.component';
import { HttpClientModule } from '@angular/common/http';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forChild(uiRoutes),
  ],
  declarations: [
    NavigationComponent,
    TestComponent,
    HomeComponent,
    LoginComponent,
    PalindroneComponent,
    MissingNumberComponent,
    ClockComponent,
  ],
  exports: [
    NavigationComponent,
    TestComponent,
    HomeComponent,
    LoginComponent,
    PalindroneComponent,
    MissingNumberComponent,
    ClockComponent,
  ],
  providers: [],
})
export class UiModule {}
