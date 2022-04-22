import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  // api dan kullanıcı bazlı çekilecek olan kısım
  userPages = [
    // {
    //   url:'/crm'
    // },
    {
      url:'/admin'
    }
  ]


  /**
   *
   */
  constructor(private router:Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('route', route);
      console.log('state', state); // redirect yapma şansı tanımız


      // kullanıcı authenticated ise sayfaya erişim sağlayabilir. true döndürürüz. değil ise false döndürürüz.
      // Observable<boolean third party login işlemlerinde tercih ettiğimiz dönüş tipi auth0 external login sürecini (facebook,instagram,google) 3rd bir servisin userInfo yada login endpoind tetikleyerek işlem yapıyoruz.
      // kendi api çalışırken access_token kontrol etmek yeterli bu sebeple boolean tipi yeterli olucaktır.


    // return of(true);

    const token = localStorage.getItem('token');
    const userHasPermission = this.userPages.find(x=> x.url == state.url); // yani kullanıcının bu sayfaya yetkisi varsa

    if(token != undefined && userHasPermission){

      return true;
    }

    // kullanıcının token yoksa yetkisi yok sayfasına yönlendirebiliriz.
    this.router.navigateByUrl('unauthorized');

    // api tarafında url bazlı yetkilendirme varsa state.url kullanabiliriz.
    // state.url;




    return false;
  }
  
}
