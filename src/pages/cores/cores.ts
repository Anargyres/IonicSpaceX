import { Component} from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoreDetails } from '../../models/CoreDetails';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';
import { CoreDetailsPage } from '../core-details/core-details';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the CoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cores',
  templateUrl: 'cores.html',
})
export class CoresPage {

  cores : CoreDetails[];
  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private spaceXService: SpaceXApiProvider,
    public loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoresPage');
    let loader = this.loadingCtrl.create({
      content: 'Chargement...',
    });
    loader.present().then(() => {
      this.spaceXService.getAllCores().subscribe(data => {
        this.cores = data;
        loader.dismiss();
      });
    });
  }
  openCoreDetails(core: CoreDetails) {
    this.navCtrl.push(CoreDetailsPage, {data: core});
  }
}
