import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmpresaRoutingModule} from './empresa-routing-module'
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { EmpresaComponenteComponent } from './empresa-componente/empresa-componente.component';
import {UsuariosComponent} from '../../componentescomunes/usuarios/usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//primeNG
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    TableModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ConfiguracionComponent,
    EmpresaComponenteComponent,
    UsuariosComponent
    
  ]
})
export class EmpresaModule { }
