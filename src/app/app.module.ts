import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListUsersComponent } from './components/admin/list-users/list-users.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';

import { HttpClientModule } from '@angular/common/http';
/**
 * Services
 */
import { DataAPIService } from './services/data-api.service';
import { ProductsComponent } from './components/products/products.component';
 @NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ListUsersComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
