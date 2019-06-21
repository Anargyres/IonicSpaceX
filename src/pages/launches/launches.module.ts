import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchesPage } from './launches';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    LaunchesPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchesPage),
  ]
})
export class LaunchesPageModule {}
