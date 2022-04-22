import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { HighlightTextDirective } from './directives/highlight-text.directive';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';

// directivelerde component gibi declare edilir. 

@NgModule({
  declarations: [
    AppComponent,
    UnauthorizedComponent,
    HighlightTextDirective,
    MyButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
