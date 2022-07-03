// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MODULE
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// LIBS
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline
} from '@ant-design/icons-angular/icons';

registerLocaleData(fr);

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    NzIconModule
  ],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR },
    { provide: NZ_ICONS, useValue: icons}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
