import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { CrmComponent } from './crm.component';
import { CrmFeatureModule } from './feature/crm.feature.module';
import { AdminFeatureModule } from '../admin/feature/admin.feature.module';
;


@NgModule({
  declarations: [
    CrmComponent
  ],
  imports: [
    CommonModule,
    CrmRoutingModule,
    CrmFeatureModule,
    AdminFeatureModule
  ]
})
export class CrmModule { }

// crm import'a  AdminFeatureModule eklendi.