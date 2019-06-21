import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';
import { Capsule } from '../../models/capsule/Capsule';
import { CapsuleDetailPage } from '../capsule-detail/capsule-detail';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the CapsulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsules',
  templateUrl: 'capsules.html',
})
export class CapsulesPage {

  capsules: Capsule[];

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private spaceXService: SpaceXApiProvider,
    public loadingCtrl: LoadingController) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsulesPage');
    let loader = this.loadingCtrl.create({
      content: 'Chargement...',
    });
    loader.present().then(() => {
      this.spaceXService.getAllCapsules().subscribe(data => {
        this.capsules = data;
        loader.dismiss();
      });
    });
  }

  openCapsuleDetail(capsule: Capsule) {
    this.navCtrl.push(CapsuleDetailPage, {data: capsule});
  }

}
