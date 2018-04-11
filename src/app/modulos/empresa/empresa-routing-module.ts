import { EmpresaComponenteComponent } from './empresa-componente/empresa-componente.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const empresaRoutes: Routes =[
  {
    path: '',
    component: EmpresaComponenteComponent,
    children: [
        {path: 'configuracion', component: ConfiguracionComponent},
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
