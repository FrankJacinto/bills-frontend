import { EmpresaComponenteComponent } from './empresa-componente/empresa-componente.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PerfilUsuarioComponent} from "./perfil-usuario/perfil-usuario.component";
import {CuentaComponent} from "./perfil-usuario/cuenta/cuenta.component";
import {PerfilComponent} from "./perfil-usuario/perfil/perfil.component";
import {FotoComponent} from "./perfil-usuario/foto/foto.component";

const empresaRoutes: Routes =[
  {
    path: '',
    component: EmpresaComponenteComponent,
    children: [
        {path: 'configuracion', component: ConfiguracionComponent},
        {path: 'perfil', component: PerfilUsuarioComponent,
         children: [
             {path: 'editperfil', component: PerfilComponent},
             {path: 'cuenta', component: CuentaComponent},
             {path: 'foto', component: FotoComponent},
         ]
        },
        {path: '', redirectTo: 'configuracion', pathMatch: 'full'},
        {path: '**', component: ConfiguracionComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(empresaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmpresaRoutingModule { }
