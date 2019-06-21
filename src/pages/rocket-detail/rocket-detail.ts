import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Rocket } from '../../models/rockets/Rocket';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';

/**
 * Generated class for the RocketDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket-detail',
  templateUrl: 'rocket-detail.html',
})
export class RocketDetailPage {

  rocket: Rocket;
  isFromLaunchOrLaunchPad = false;
  rocketId: string = "";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private spaceXService: SpaceXApiProvider,
    public loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketDetailPage');
    this.isFromLaunchOrLaunchPad = this.navParams.get('isFromLaunchOrLaunchPad');
    this.rocketId = this.navParams.get('rocketId');
    if (this.isFromLaunchOrLaunchPad) {
      let loader = this.loadingCtrl.create({
        content: 'Chargement...',
      });
      loader.present().then(() => {
        this.spaceXService.getOneRocket(this.rocketId).subscribe(data => {
          this.rocket = data;
          loader.dismiss();
        });
      });
    
    } else {
      this.rocket = this.navParams.get('data');
    }
  }
}
