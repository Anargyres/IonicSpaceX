import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Capsule } from '../../models/capsule/Capsule';

/**
 * Generated class for the CapsuleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule-detail',
  templateUrl: 'capsule-detail.html',
})
export class CapsuleDetailPage {

  capsule: Capsule;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.capsule = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsuleDetailPage');
  }

}
