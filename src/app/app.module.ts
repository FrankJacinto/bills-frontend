import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentescomunes/login/login.component';
import {AppRouterModule}  from './app-routing-module'
import {AppConfig} from './servicioscomunes/app-config';
import {ApiRequestService} from './servicioscomunes/api-request.service';
import {AuthService} from './servicioscomunes/auth.service';
import {AuthGuardService} from './servicioscomunes/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [
    AppConfig,
    ApiRequestService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
