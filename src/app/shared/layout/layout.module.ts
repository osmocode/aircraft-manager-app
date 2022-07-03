import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { ContentComponent } from './content/content.component';

const DECLARATIONS = [
  ContainerComponent,
  ContentComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [...DECLARATIONS],
  declarations: [...DECLARATIONS],
})
export class AppSharedLayoutModule { }
