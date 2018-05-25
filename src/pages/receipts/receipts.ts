import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

import {ReceiptProvider, Receipt, HistoryType} from '../../providers/receipt/receipt';
import {CardIdProvider} from '../../providers/card-id/card-id';

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
	receipts: Receipt[];

	//TODO: tab nav aufteilen order/topup/withdraw
	// type: 0 = order
	// type: 1 = topup
	// type: 2 = withdraw

	constructor(public navCtrl: NavController,
			public navParams: NavParams,
			private receiptProvider: ReceiptProvider,
			private cardIdProvider: CardIdProvider,
			private zone: NgZone) {

		receiptProvider.getReceipts(cardIdProvider.cardId)
			.then((receipts) => {
				console.log("ReceiptsPage: successfully loaded receipts");

				this.zone.run(()=>{ 
					this.receipts = receipts;
				})

			})
			.catch((error) => {
				console.error("ReceiptsPage: coule not get receipts; error: " + error);
			});
		}

	openSettings(){
		this.navCtrl.push(SettingsPage);
	}

	onReceiptClick(receipt: Receipt){
		if(receipt.ReceiptUrl && receipt.ReceiptUrl != ""){
			window.open(receipt.ReceiptUrl, "_system");
		}
	}
}