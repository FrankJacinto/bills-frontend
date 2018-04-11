import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const welcomeRoutes: Routes = <Routes>[
  {
    path: '',
    component: BienvenidoComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'bienvenido', component: BienvenidoComponent},
          {path: '', redirectTo: 'bienvenido', pathMatch: 'full'},
          {path: '**', component: BienvenidoComponent}
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