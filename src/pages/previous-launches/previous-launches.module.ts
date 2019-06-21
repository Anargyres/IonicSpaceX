import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviousLaunchesPage } from './previous-launches';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PreviousLaunchesPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviousLaunchesPage),
    PipesModule.forRoot(),
  ],
})
export class PreviousLaunchesPageModule {}
