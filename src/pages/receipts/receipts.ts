import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

import {ReceiptProvider, Receipt} from '../../providers/receipt/receipt';
import {CardProvider} from '../../providers/card/card';

declare module '../../providers/receipt/receipt' {
	interface Receipt {
		iconString: string;
		bgColor: string;
	}
}

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

	private _selection: string = "order";
	private _orderReceipts: Receipt[] = [];
	private _topUpReceipts: Receipt[] = [];
	private _withdrawReceipt: Receipt[] = [];

	receipts: Receipt[];
	// type: 0 = order
	// type: 1 = topup
	// type: 2 = withdraw

	constructor(public navCtrl: NavController,
			public navParams: NavParams,
			private receiptProvider: ReceiptProvider,
			private cardProvider: CardProvider,
			private zone: NgZone,
			private toastCtrl: ToastController) {

		this.receiptProvider.getReceipts(this.cardProvider.cardId)
			.then((receipts) => {
				receipts.forEach((receipt) => {
					switch(receipt.Type){
						
						case 2:
						//found: withdraw
						this._withdrawReceipt.push(receipt);
						receipt.iconString = "arrow-down";
						receipt.bgColor = "#e5e5e5";
						break;

						case 1:
						//found: topup
						this._topUpReceipts.push(receipt);
						receipt.iconString = "arrow-up";
						receipt.bgColor = "#e5e5e5";
						break;

						default:
						case 0:
						//found: order
						this._orderReceipts.push(receipt);
						receipt.iconString = "wine";
						receipt.bgColor = "#ffffff";
						break;
					}
				});

				this.zone.run(()=>{ 
					this.showSelected();
				});

			})
			.catch((error) => {
				//TODO: handle error
			});
		}

	set selection(value: string){
		this._selection = value;
		this.showSelected();
	}

	get selection(){
		return this._selection;
	}

	openSettings(){
		this.navCtrl.push(SettingsPage);
	}

	onReceiptClick(receipt: Receipt){
		if(receipt.ReceiptUrl && receipt.ReceiptUrl != ""){
			window.open(receipt.ReceiptUrl, "_system");
		} else {
			if(receipt.Type == 0){
				const toast = this.toastCtrl.create({
					message: "Sorry, no receipt available. Please contact the organizer.",
					duration: 3000
				});
				toast.present();
			}	
		}
	}

	showSelected(){
		this.zone.run(() => {
			if(this._selection == "withdraw"){
				this.receipts = this._withdrawReceipt;
			} else if (this._selection == "topup"){
				this.receipts = this._topUpReceipts;
			} else {
				//show order receipts
				this.receipts = this._orderReceipts;
			}
		});
	}
}