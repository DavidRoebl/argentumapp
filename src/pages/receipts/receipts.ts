import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {SettingsPage} from '../settings/settings';
import { ReceiptDetailPage} from '../receipt-detail/receipt-detail';

import { Dataprovider, HistoryType, Receipt } from '../../dataprovider';

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

  selection: string = "all";
  receipts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var listRecieptsLocal = [];
    Dataprovider.receipts.forEach(function (value) {
      var iconString = "";
      if(value.histType == HistoryType.Withdraw){
        iconString = "arrow-down";
      } else if (value.histType == HistoryType.Order){
        iconString = "beer";
      } else {
        //value.histType == HistoryType.TopUp
        iconString = "arrow-up";
      }

      let newListReceipt = new ListItemReceipt(value.id, value.date, value.number, iconString);
      listRecieptsLocal.push(newListReceipt);
    });
    this.receipts = listRecieptsLocal;
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

  onReceiptClick(receiptId: number){
    var selectedReceipt: Receipt;
    Dataprovider.receipts.forEach(function(value){
      if(value.id == receiptId){
        selectedReceipt = value;
      }
    })

    Dataprovider.selectedReceipt = selectedReceipt;
    this.navCtrl.push(ReceiptDetailPage);
    console.log("receipt with id " + receiptId + " was selected");
  }

}

export class ListItemReceipt {
  constructor(public id: number, 
    public date: string, public value: number, 
    public iconName: string){
  }
}