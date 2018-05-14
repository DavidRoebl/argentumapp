import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
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

  private _selection: string = "all";
  receipts: any;
  private _allReceipts: any;
  private _debitReceipts: any;
  private _creditReceipts: any;

  set selection(value: string){
    this._selection = value;
    this.showSelected();
  }

  get selection(){
    return this._selection;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._allReceipts = [];
    this._debitReceipts = [];
    this._creditReceipts = [];
    Dataprovider.receipts.forEach((value)=>{
      var iconString = "";
      var cardColor = "";
      if(value.histType == HistoryType.Withdraw){
        iconString = "arrow-down";
        cardColor = "#e30000"; //TODO: style
      } else if (value.histType == HistoryType.Order){
        iconString = "wine";
        cardColor = "#000000"; //TODO: style
      } else {
        //value.histType == HistoryType.TopUp
        iconString = "arrow-up";
        cardColor = "#0ccf1f"; //TODO: style
      }

      let newListReceipt = new ListItemReceipt(value.id, value.date, value.value, iconString, cardColor);
      this._allReceipts.push(newListReceipt);

      if(value.histType == HistoryType.TopUp){
        this._creditReceipts.push(newListReceipt);
      } else {
        this._debitReceipts.push(newListReceipt);
      }
    });
    this.receipts = this._allReceipts;
    }

  openSettings(){
    this.navCtrl.push(SettingsPage);
  }

  onReceiptClick(receiptId: number){
    var selectedReceipt: Receipt;
    Dataprovider.receipts.forEach((value)=>{
      if(value.id == receiptId){
        selectedReceipt = value;
      }
    });

    Dataprovider.selectedReceipt = selectedReceipt;
    this.navCtrl.push(ReceiptDetailPage);
  }

  showSelected(){
    if(this._selection == "all"){
      this.receipts = this._allReceipts;
    } else if(this._selection == "credit"){
      this.receipts = this._creditReceipts;
    } else {
      //this._selection == "debit"
      this.receipts = this._debitReceipts;
    }
  }
}

export class ListItemReceipt {
  constructor(public id: number,
    public date: string, public value: number,
    public iconName: string, public cardColor: string){
  }
}
