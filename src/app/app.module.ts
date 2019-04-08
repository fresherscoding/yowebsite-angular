import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import {MaterialModule} from './material-module';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { RightPaneComponent } from './right-pane/right-pane.component';
import { environment } from '../environments/environment.prod';
import { CreateWebsiteComponent } from './create-website/create-website.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LeftnavComponent,
    MainWindowComponent,
    MiddleSectionComponent,
    RightPaneComponent,
    CreateWebsiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MDBBootstrapModulesPro.forRoot(),
    AuthModule,
    ReactiveFormsModule
  ],
  providers: [
    MDBSpinningPreloader,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: 'BASE_API_URL',
      useValue: environment.baseUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
