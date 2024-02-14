import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginRoutingModule } from './auth/login-routing.module';
import { LoginModule } from './auth/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    LoginRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}