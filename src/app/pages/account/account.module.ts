import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginService } from './login/login.service';
import { TokenInterceptor } from 'src/app/interceptors/token.interceptor';


@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    },
    LoginService
  ]
})
export class AccountModule { }

// Not: lazyLoaded Page Module ile Modüler bir yapıda angular uygulaması geliştiriyorsak. Servicelermizi ilgili Page Module providers olarak tanıtmak zorundayız.