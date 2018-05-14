import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {SettingsPage} from '../settings/settings';
import {HistoryType} from "../../dataprovider";
import {TabsPage} from "../tabs/tabs";
import {PastPage} from "../past/past";
import {CurrentPage} from "../current/current";

/**
 * Generated class for the FuturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-future',
  templateUrl: 'future.html',
})
export class FuturePage {

  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuturePage');
  }


  openSettings(){
    this.rootNavCtrl.push(SettingsPage);
  }

}
