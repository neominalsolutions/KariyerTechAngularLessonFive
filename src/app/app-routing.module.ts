import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleGuard } from './guards/module.guard';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

// canLoad guardımız app routing module içerisinde olacaktır.
// canactivate guard ise ilgili module içerisinde tanımlı olucaktır.

const routes: Routes = [
  { 
    
    path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    canLoad:[ModuleGuard]
  }, { path: 'crm', loadChildren: () => import('./pages/crm/crm.module').then(m => m.CrmModule) }, { path: 'account', loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule) },
  {
    path:'unauthorized',
    component:UnauthorizedComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
