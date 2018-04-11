import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { WelcomeComponenteComponent } from './welcome-componente/welcome-componente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const welcomeRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponenteComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'inicio', component: BienvenidoComponent },
          { path: '', redirectTo: 'inicio', pathMatch: 'full' },
          { path: '**', component: BienvenidoComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(welcomeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WelcomeRoutingModule { }
