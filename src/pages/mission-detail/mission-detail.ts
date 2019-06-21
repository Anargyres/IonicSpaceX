import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { OneMission } from '../../models/missions/OneMission';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';

/**
 * Generated class for the MissionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mission-detail',
  templateUrl: 'mission-detail.html',
})
export class MissionDetailPage {

  mission: OneMission;
  missionId: string = "";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private spaceXService: SpaceXApiProvider,
    public loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissionDetailPage');
    console.log(this.navParams);
    this.missionId = this.navParams.get('data').mission_id;
    let loader = this.loadingCtrl.create({
      content: 'Chargement...',
    });
    loader.present().then(() => {
      console.log('blabla');
      this.spaceXService.getOneMission(this.missionId).subscribe(data => {
        this.mission = data;
        loader.dismiss();
      });
    });
  }

}
