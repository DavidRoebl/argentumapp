import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ReceiptsPage} from '../receipts/receipts';
import {SettingsPage} from '../settings/settings';

/**
 * Generated class for the PastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-past',
  templateUrl: 'past.html',
})
export class PastPage {

  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }
    doNavigation(){
  //	this.navCtrl.pop();
  	this.rootNavCtrl.push(ReceiptsPage);
  }
  
  openSettings(){
    this.rootNavCtrl.push(SettingsPage);
  }
}
