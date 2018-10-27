import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Obs1Component } from './obs1/obs1.component';
import { TemplateBsdFrmComponent } from './template-bsd-frm/template-bsd-frm.component';
import { ReactiveBsdFrmComponent } from './reactive-bsd-frm/reactive-bsd-frm.component';
import { DynamicFrmComponent } from './dynamic-frm/dynamic-frm.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    Obs1Component,
    TemplateBsdFrmComponent,
    ReactiveBsdFrmComponent,
    DynamicFrmComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent },
      { path : 'about', component : AboutComponent },
      { path : 'login', component : LoginComponent },
      { path: 'contact', component : ContactComponent }
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
