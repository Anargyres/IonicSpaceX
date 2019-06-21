import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the LaunchesPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launches',
  templateUrl: 'launches.html'
})
export class LaunchesPage {

  previousLaunchesRoot = 'PreviousLaunchesPage'
  nextLaunchesRoot = 'NextLaunchesPage'


  constructor(public navCtrl: NavController) {}

}
