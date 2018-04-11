import { LoginComponent } from './componentescomunes/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';



const routes : Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'welcome', loadChildren: 'app/modulos/welcome/welcome.module#WelcomeModule' },
	{ path :'admin',loadChildren: 'app/modulos/admin/admin.module#AdminModule'},
	{ path :'empresa',loadChildren: 'app/modulos/empresa/empresa.module#EmpresaModule'},
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: '**', component: LoginComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			routes,
			{
        useHash : true
			}
		)
	],
	exports: [
		RouterModule
	],
	providers: [
		
	]
})
export class AppRouterModule { }