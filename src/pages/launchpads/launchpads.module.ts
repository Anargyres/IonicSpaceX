import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchpadsPage } from './launchpads';

@NgModule({
  declarations: [
    LaunchpadsPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchpadsPage),
  ],
})
export class LaunchpadsPageModule {}
