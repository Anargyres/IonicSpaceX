import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';
import { Launch } from '../../models/launchs/Launch';
import { LaunchDetailPage } from '../launch-detail/launch-detail';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the PreviousLaunchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-previous-launches',
  templateUrl: 'previous-launches.html',
})
export class PreviousLaunchesPage {

  launches: Launch[];
  descending: boolean = false;
  order: number;
  column: string = "";

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private spaceXService: SpaceXApiProvider, 
    public loadingCtrl: LoadingController) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousLaunchesPage');
    let loader = this.loadingCtrl.create({
      content: 'Chargement...',
    });
    loader.present().then(() => {
      this.spaceXService.getPreviousLaunches().subscribe(data => {
        this.launches = data;
        loader.dismiss();
      });
    });
  }

  openLaunchDetail(launch: Launch) {
    this.navCtrl.push(LaunchDetailPage, {data: launch});
  }

  sortByName() {
    this.column = "mission_name";
    this.sort();
  }

  sortByDate() {
    this.column = "launch_date_unix";
    this.sort();
  }

  sortByLaunched() {
    this.column = "launch_success";
    this.sort();
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
}