import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) }, { path: 'crm', loadChildren: () => import('./pages/crm/crm.module').then(m => m.CrmModule) }, { path: 'account', loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
