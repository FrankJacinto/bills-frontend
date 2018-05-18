import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import {WelcomeRoutingModule} from './welcome-routing-module';
import { WelcomeComponenteComponent } from './welcome-componente/welcome-componente.component'
import { SignupComponent } from '../../componentescomunes/signup/signup.component';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    StepsModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    BienvenidoComponent,
    SignupComponent,
    WelcomeComponenteComponent,
  ]
})
export class WelcomeModule { }
