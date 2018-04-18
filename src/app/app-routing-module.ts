import { LoginComponent } from './componentescomunes/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const routes : Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'welcome', loadChildren: 'app/modulos/welcome/welcome.module#WelcomeModule' },
	{ path :'admin', loadChildren: 'app/modulos/admin/admin.module#AdminModule'},
	{ path :'empresa',loadChildren: 'app/modulos/empresa/empresa.module#EmpresaModule'},
	{ path: '', redirectTo: '/welcome', pathMatch: 'full' },
	{ path: '**', component: LoginComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			routes,
			{
        useHash : true,
        preloadingStrategy: SelectivePreloadingStrategy
			}
		)
	],
	exports: [
		RouterModule
	],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRouterModule { }
