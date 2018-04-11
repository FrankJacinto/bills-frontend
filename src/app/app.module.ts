import { WelcomeModule } from './modulos/welcome/welcome.module';
import { AdminModule } from './modulos/admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentescomunes/login/login.component';
import {AppRouterModule}  from './app-routing-module'
import { EmpresaModule } from './modulos/empresa/empresa.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    AdminModule,
    EmpresaModule,
    WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
