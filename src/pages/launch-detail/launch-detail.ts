import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Launch } from '../../models/launchs/Launch';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { RocketDetailPage } from '../rocket-detail/rocket-detail';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';

/**
 * Generated class for the LaunchDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-detail',
  templateUrl: 'launch-detail.html',
})
export class LaunchDetailPage {

  launch: Launch;
  flight_number = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private spaceXService: SpaceXApiProvider, private inAppBrowser : InAppBrowser, 
    public loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchDetailPage');
    this.flight_number = this.navParams.get('flightNumber');
    this.launch = this.navParams.get('data');
    if((this.flight_number != "") && (this.launch == null)) {
      let loader = this.loadingCtrl.create({
        content: 'Chargement...',
      });
      loader.present().then(() => {
        this.spaceXService.getLaunch(this.flight_number).subscribe(data => {
          this.launch = data[0];
          loader.dismiss();
        });
      });
    } 
  }

  openRocketDetail(rocketId: string) {
    this.navCtrl.push(RocketDetailPage, {rocketId: rocketId, isFromLaunchOrLaunchPad: true});
  }

  openLink(link : string){
    this.inAppBrowser.create(encodeURI(link), '_self', {
      hardwareback: 'no',
      location: 'no'
    });
  }
}
