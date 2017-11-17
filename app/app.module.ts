import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgLoadingBarModule } from 'ng-loading-bar';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		NgLoadingBarModule.forRoot(),
		RouterModule.forRoot([
			{path:'', component:HomeComponent},
			{path:'about', component:AboutComponent},
			{path:'contact', component:ContactComponent},
			{path:'login', component:LoginComponent},
			{path:'customer/register', component:RegisterComponent},
		])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
