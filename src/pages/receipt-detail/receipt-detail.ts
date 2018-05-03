import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Dataprovider, Receipt } from '../../dataprovider';
import {SettingsPage} from '../settings/settings';

/**
 * Generated class for the ReceiptDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receipt-detail',
  templateUrl: 'receipt-detail.html',
})
export class ReceiptDetailPage {

  public receipt: Receipt;
  public beverages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.receipt = Dataprovider.selectedReceipt;
    this.beverages = this.receipt.beverages;
    console.log(this.receipt.id);
    console.log(this.receipt);
  }

  openSettings(){
    this.navCtrl.push(SettingsPage);
  }

  printReceipt(){
    let toast = this.toastCtrl.create({
      message: 'TODO: open exernal browser for url: ' + this.receipt.receiptUrl,
      duration: 5000, //millis i guess?
      position: 'bottom'
    });
    toast.present();
  }
}
