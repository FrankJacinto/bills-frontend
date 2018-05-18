import { UploadService } from './servicioscomunes/upload.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentescomunes/login/login.component';
import { AppRouterModule } from './app-routing-module';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppConfig} from './servicioscomunes/app-config';
import {ApiRequestService} from './servicioscomunes/api-request.service';
import {AuthService} from './servicioscomunes/auth.service';
import {AuthGuardService} from './servicioscomunes/auth-guard.service';
import {LoginService} from './componentescomunes/login/login.service';
// scroll movimiento
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
  ],
  entryComponents: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  providers: [
    AppConfig,
    ApiRequestService,
    AuthService,
    AuthGuardService,
    NgbActiveModal,
    LoginService,
    HttpClient,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
