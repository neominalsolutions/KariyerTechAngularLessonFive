import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CrmFeatureModule } from '../crm/feature/crm.feature.module';
import { AdminFeatureModule } from './feature/admin.feature.module';




@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CrmFeatureModule,
    AdminFeatureModule,
  ]
})
export class AdminModule { }

// Başka bir page Module altındaki ortak olan componentlere erişmek istersek bu durumda Feature Module üzerinden erişim sağlayabiliriz.