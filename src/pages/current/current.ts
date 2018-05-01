import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ReceiptsPage} from '../receipts/receipts';
import {SettingsPage} from '../settings/settings';

/**
 * Generated class for the CurrentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-current',
  templateUrl: 'current.html',
})
export class CurrentPage {

  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentPage');
  }
  
    doNavigation(){
  //	this.navCtrl.pop();
  this.navParams.get('rootNavCtrl')
  	this.rootNavCtrl.push(ReceiptsPage);
  }

  openSettings(){
    this.rootNavCtrl.push(SettingsPage);
  }
}
