import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {EmpresaRoutingModule} from './empresa-routing-module'
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { EmpresaComponenteComponent } from './empresa-componente/empresa-componente.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { CuentaComponent } from './perfil-usuario/cuenta/cuenta.component';
import { PerfilComponent } from './perfil-usuario/perfil/perfil.component';
import { FotoComponent } from './perfil-usuario/foto/foto.component';
import {UsuariosComponent} from '../../componentescomunes/usuarios/usuarios.component';
//primeNG
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    FormsModule,
    TableModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ConfiguracionComponent,
    EmpresaComponenteComponent,
    PerfilUsuarioComponent,
    CuentaComponent,
    PerfilComponent,
    FotoComponent,
    UsuariosComponent
    
  ]
})
export class EmpresaModule { }
                        