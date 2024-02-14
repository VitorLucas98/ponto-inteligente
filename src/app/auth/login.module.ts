import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { LogarComponent } from './logar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LoginComponent, LogarComponent]
})
export class LoginModule { }