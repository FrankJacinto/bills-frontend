import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import {WelcomeRoutingModule} from './welcome-routing-module';
import { WelcomeComponenteComponent } from './welcome-componente/welcome-componente.component'
@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ],
  declarations: [
    BienvenidoComponent,
    WelcomeComponenteComponent
  ]
})
export class WelcomeModule { }
