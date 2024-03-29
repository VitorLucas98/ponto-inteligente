import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogarComponent } from './logar.component';
import { LoginComponent } from './login/login.component';

export const LoginRoutes: Routes = [
	{
		path: 'login',
		component: LogarComponent,
		children: [{ path: '', component: LoginComponent }]
	}
];

@NgModule({
  imports: [ RouterModule.forChild(LoginRoutes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule {
}