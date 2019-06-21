import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquipmentTabsPage } from './equipment-tabs';

@NgModule({
  declarations: [
    EquipmentTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(EquipmentTabsPage),
  ]
})
export class EquipmentTabsPageModule {}
