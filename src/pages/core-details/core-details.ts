import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CoreDetails } from '../../models/CoreDetails';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';
import { Launch } from '../../models/launchs/Launch';
import { LaunchDetailPage } from '../launch-detail/launch-detail';

/**
 * Generated class for the CoreDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-core-details',
  templateUrl: 'core-details.html',
})
export class CoreDetailsPage {

  core: CoreDetails;
  launches: Launch[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private spaceXService: SpaceXApiProvider, 
    public loadingCtrl: LoadingController) {
    this.core = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoreDetailsPage');
    let loader = this.loadingCtrl.create({
      content: 'Chargement...',
    });
    loader.present().then(() => {
      this.spaceXService.getAllLaunches().subscribe(data => {
        this.launches = data;
        loader.dismiss();
      });
    });
  }

  openLaunchDetail(nameMission: String) {
    for(var i = 0; i < this.launches.length; i++){
      this.launches[i].rocket.second_stage.payloads.forEach(payload => {
        if (payload.payload_id == nameMission) {
          this.navCtrl.push(LaunchDetailPage, {flightNumber: this.launches[i].flight_number});
        }
      });
    }
  }
}
