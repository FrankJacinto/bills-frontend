import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import {AdminRoutingModule} from './admin-routing-module';
import { AdminComponenteComponent } from './admin-componente/admin-componente.component'

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [PerfilComponent, AdminComponenteComponent]
})
export class AdminModule { }
