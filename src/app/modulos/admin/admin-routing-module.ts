import { AdminComponenteComponent } from './admin-componente/admin-componente.component';
import { AppComponent } from './../../app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponenteComponent,
    children: [
      {path: 'perfil', component: PerfilComponent},
      {path: '', redirectTo: 'perfil', pathMatch: 'full'},
      {path: '**', component: PerfilComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
