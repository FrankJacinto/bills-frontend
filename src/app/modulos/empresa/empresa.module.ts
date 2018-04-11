import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {EmpresaRoutingModule} from './empresa-routing-module'
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { EmpresaComponenteComponent } from './empresa-componente/empresa-componente.component';

@NgModule({
  imports: [
    CommonModule,
    EmpresaRoutingModule

  ],
  declarations: [ConfiguracionComponent, EmpresaComponenteComponent]
})
export class EmpresaModule { }
