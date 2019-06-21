import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Launchpads } from '../../models/launchpads/Launchpads';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';
import { Rocket } from '../../models/rockets/Rocket';
import { RocketDetailPage } from '../rocket-detail/rocket-detail';

/**
 * Generated class for the LaunchpadDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad-detail',
  templateUrl: 'launchpad-detail.html',
})
export class LaunchpadDetailPage {

  launchpad: Launchpads
  rockets: Rocket[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private spaceXService: SpaceXApiProvider,
    public loadingCtrl: LoadingController) {
    this.launchpad = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadDetailPage');

    let loader = this.loadingCtrl.create({
      content: 'Chargement...',
    });
    loader.present().then(() => {
      this.spaceXService.getAllRockets().subscribe(data => {
        this.rockets = data;
        loader.dismiss();
      });
    });
  }

  openRocketDetail(vehicle: String) {
    this.rockets.forEach(rocket => {
      if (rocket.name == vehicle) {
        this.navCtrl.push(RocketDetailPage, {rocketId: rocket.id,  isFromLaunchOrLaunchPad: true});
      }
    });
  }

}
