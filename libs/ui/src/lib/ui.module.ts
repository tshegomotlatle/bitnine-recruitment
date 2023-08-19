import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { uiRoutes } from './lib.routes';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(uiRoutes)],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
})
export class UiModule {}
