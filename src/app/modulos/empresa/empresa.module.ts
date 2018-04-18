import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {EmpresaRoutingModule} from './empresa-routing-module'
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { EmpresaComponenteComponent } from './empresa-componente/empresa-componente.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { CuentaComponent } from './perfil-usuario/cuenta/cuenta.component';
import { PerfilComponent } from './perfil-usuario/perfil/perfil.component';
import { FotoComponent } from './perfil-usuario/foto/foto.component';

@NgModule({
  imports: [
    CommonModule,
    EmpresaRoutingModule
  ],
  declarations: [
    ConfiguracionComponent,
    EmpresaComponenteComponent,
    PerfilUsuarioComponent,
    CuentaComponent,
    PerfilComponent,
    FotoComponent
  ]
})
export class EmpresaModule { }
