import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppService } from './app.service';

// Toast import statements
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routing
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { SharedModule } from './shared/shared.module';

import { LoginComponent } from './user/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


const ROUTES: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '*', component: LoginComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

  BrowserModule,
    FormsModule,
    UserModule,
    ChatModule,
    SharedModule,
    HttpClientModule,
    ToastModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
