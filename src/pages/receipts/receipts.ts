import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {SettingsPage} from '../settings/settings';
import { ReceiptDetailPage} from '../receipt-detail/receipt-detail';

/**
 * Generated class for the ReceiptsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receipts',
  templateUrl: 'receipts.html',
})
export class ReceiptsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiptsPage');
  }


  openSettings(){
    this.navCtrl.push(SettingsPage);
  }

    doNavigation(){
    	this.navCtrl.push(ReceiptDetailPage);
    }

}
