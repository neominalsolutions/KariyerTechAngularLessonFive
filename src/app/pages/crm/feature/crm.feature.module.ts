import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';


// başka bir modül users componenti göreceği için Feature module üzerinden export ediyoruz
@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersComponent
  ]
})
export class CrmFeatureModule { }
