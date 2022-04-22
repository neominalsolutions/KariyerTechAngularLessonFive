import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CrmComponent } from './crm.component';
import { EmployeesComponent } from './employees/employees.component';
import { UsersComponent } from './users/users.component';

// crm pathini auth.guard ile koruyacağım. can activate ise o component sayfa açılabilir mi
// ilgili modül içerisindeki bir componenti koruma altına aldığımız durumlarda tercih ederiz.
// direk olarak bir modülün yüklenmesini yada o modlün yetkis olan kullanıcılar için yüklenmesini istersem bu durumda canLoad seçeneğini tercih ederiz. canLoad o modül yüklenebilir mi demek.
const routes: Routes = [{ 
  path: '', component: CrmComponent,
  children:[
    {
      path:'users',
      component:UsersComponent,
      canActivate:[AuthGuard]
    },
    {
      path:'employees',
      component:EmployeesComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
