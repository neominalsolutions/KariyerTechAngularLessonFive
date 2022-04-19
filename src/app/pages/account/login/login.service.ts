import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';

// gelen response değiştirip balka bir dönüş uygulamayı düşünürsek map operatörüne ihtiyaç duyarız.
// tap ise yapılan request ilk yakaladığımız an burada localstorage token bilgisini atıcaz.
// catchError operatöründe ise olduk ki bir hata oluşursa hatayı observable olarak döndürmek için kullanırız.
// of operatörü ile observable tipte bir dönüş yapabilmek için kullandık.
// pipe operatörü ise tüm bu rxjs ile alakalı operatörlerin sarmalladığımız bir observable bir dönüş tipidir.

// Root demek AppModule yani root module demek.
// serviceler root module yani AppModule direct enject olacak şekilde tanımlandıkları için AppModulede provider kısmana eklemeye gerek yok
// lazy Loaded Page Modulede bunu eklememiz gerekir.
// karşıdaki kaynağa başarılı bir şekilde ulaştığımız durumlarda tap ve mape giriyoruz.
// hata durumunda ise catch error düşeriz.
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  signIn(param:any) {

   return this.http.post('https://reqres.in/api/login',param)
    .pipe(
      tap((res:any) => {
        console.log('tap', res);

        if(res['token'] != undefined){
          localStorage.setItem('token',res['token'])
        }

      } ),
      map((res:any) => {
        console.log('map', res)
        // resi farklı bir formatta callback yapmak istiyorum

        if(res['token']){
          return  {success:true,redirect:'/', status:200}
        } else {

          return {success:false, redirect:null, status:400};
        }

      }),
      catchError(err => {
        console.log('err', err);

        // error nesnesini değiştirip kendi eror objemizde bu noktada gönderiliriz.
        return  of<any>(err);
      }) 
      );
  }


  signOut() {

  }

}
