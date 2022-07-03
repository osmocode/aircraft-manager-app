import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AppSharedLayoutModule } from 'src/app/shared/layout/layout.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,

    AppSharedLayoutModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
