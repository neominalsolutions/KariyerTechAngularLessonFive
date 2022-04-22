import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

// HttpInterceptor interface üzerinden implemente olurlar.
// Interceptorler Module içerisinde providers kısmında tanımlanır.

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log('uygulamadaki tüm servis istekleri servis isteğinden sonra buraya düşüp duruma göre header kısmını değiştirecektir.')

    // next ile aynı net core daki next middleware çalışma mantığı aynı.

    const token = localStorage.getItem('token');

    console.log('token', token);

    if(token != undefined){

      // protected endpointlere erişim sağladığımız
      const authReq = request.clone({
        headers:request.headers.set('Authorization',`Bearer ${token}`).set('Content-Type','application/json')
      })

      console.log('token var', token);

      // request sürecini devam ettir.
      return next.handle(authReq);
    }

    // public endpoint erişim sağladığımız kısım

   // request sürecini devam ettir.

   console.log('token yok', token);
    return next.handle(request);
  }
}
