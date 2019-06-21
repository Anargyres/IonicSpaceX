import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Launch } from '../../models/launchs/Launch';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GoogleMapPage } from '../google-map/google-map';

/**
 * Generated class for the NextLaunchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-next-launches',
  templateUrl: 'next-launches.html',
})

export class NextLaunchesPage {
  DAYS = 60 * 60 * 24;
  HOURS = 60 * 60;
  MINUTES = 60;

  launches : Launch[];
  nextLaunche : Launch;
  theFinalCountdown : String;
  imageLocation : "assets/imgs/launchpad_cell";

  constructor(private navCtrl: NavController, private spaceXService: SpaceXApiProvider, private inAppBrowser : InAppBrowser, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextLaunchesPage');
    let loader = this.loadingCtrl.create({
      content: 'Chargement...',
    });
    loader.present().then(() => {
      this.spaceXService.getNextLaunches().subscribe(data=>{
        this.nextLaunche = data.shift();
        this.launches = data;
        this.setTimeUntilNextLaunche();
        setInterval(this.setTimeUntilNextLaunche.bind(this),1000);
        loader.dismiss();
      });
    });
  }

  openLink(link : string){
    this.inAppBrowser.create(encodeURI(link), '_self', {
      hardwareback: 'no',
      location: 'no',
      zoom: 'no'
    });
  }

  openMap(siteID: string){
    console.log("siteId : " + siteID)
    this.navCtrl.push(GoogleMapPage, siteID);
  }

  setTimeUntilNextLaunche() {
    var launchDate = new Date(this.nextLaunche.launch_date_utc);
    var now = new Date();
    var diffSec = 0;

    var timeUntil = Math.abs(now.getTime() - launchDate.getTime());
    diffSec = Math.ceil(timeUntil / (1000));
    var daysUntil  = Math.floor(diffSec / this.DAYS);
    diffSec -= daysUntil * this.DAYS;
    var hoursUntil = Math.floor((diffSec) / this.HOURS);
    diffSec -= hoursUntil * this.HOURS;
    var minsUntil  = Math.floor((diffSec) / this.MINUTES);
    diffSec -= minsUntil * this.MINUTES;
    var secsUntil = diffSec;
    if(daysUntil == 0){
      this.theFinalCountdown = hoursUntil + "heures : " + minsUntil + "minutes : " + secsUntil + "secondes.";
    } else if(daysUntil == 0 && hoursUntil == 0){
      this.theFinalCountdown = minsUntil + "minutes : " + secsUntil + "secondes.";
    } else if(daysUntil == 0 && hoursUntil == 0 && minsUntil == 0){
      this.theFinalCountdown = secsUntil + "secondes.";
    } else {
      this.theFinalCountdown = daysUntil + " jours  " + hoursUntil + " heures : " + minsUntil + " minutes : " + secsUntil + " secondes.";
    }
  }
}