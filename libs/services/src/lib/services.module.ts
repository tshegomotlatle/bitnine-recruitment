import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { servicesRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(servicesRoutes)],
})
export class ServicesModule {}
