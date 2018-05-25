import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { ReceiptDetailPage} from '../receipt-detail/receipt-detail';

import {ReceiptProvider, Receipt, HistoryType} from '../../providers/receipt/receipt';
import {FestivalProvider} from '../../providers/festival/festival';
import {CardIdProvider} from '../../providers/card-id/card-id';

declare module "../../providers/receipt/receipt" {
	interface Receipt {
		iconString: string;
		valueColor: string;
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

	private _selection: string = "all";
	receipts: Receipt[];
	private _allReceipts: Receipt[] = [];
	private _debitReceipts: Receipt[] = [];
	private _creditReceipts: Receipt[] = [];

	set selection(value: string){
		this._selection = value;
		this.showSelected();
	}

	get selection(){
		return this._selection;
	}

	constructor(public navCtrl: NavController,
			public navParams: NavParams,
			private receiptProvider: ReceiptProvider,
			private festivalProvider: FestivalProvider,
			private cardIdProvider: CardIdProvider,
			private zone: NgZone) {

		festivalProvider.getCurrentFestival(cardIdProvider.cardId)
			.then((festival) => {
				console.log("ReceiptsPage: successfully loaded festival");
				receiptProvider.getReceipts(festival.id, cardIdProvider.cardId)
					.then((receipts) => {
						console.log("ReceiptsPage: successfully loaded receipts");
						receipts.forEach((receipt)=>{
							receipt.iconString = ReceiptsPage.findIconString(receipt);
							receipt.valueColor = ReceiptsPage.findValueColor(receipt);

							if(receipt.histType == HistoryType.TopUp){
								this._creditReceipts.push(receipt);
							} else {
								this._debitReceipts.push(receipt);
							}
						});

						this._allReceipts = receipts;
						this.showSelected();
					})
					.catch((error) => {
						console.error("ReceiptsPage: coule not get receipts for festival " + festival.id + "; error: " + error);
					});
			})
			.catch((error) => {
				console.error("ReceiptsPage: could not get current festival: " + error);
			});
		}

	openSettings(){
		this.navCtrl.push(SettingsPage);
	}

	onReceiptClick(receipt: Receipt){
		console.log("ReceiptsPage: opening detail view for receipt: " + receipt.id);
		this.receiptProvider.selectedReceipt = receipt;
		this.navCtrl.push(ReceiptDetailPage);
	}

	showSelected(){
		console.log("ReceiptsPage: showing " + this._selection + " receipts.");
		this.zone.run(()=>{
			if(this._selection == "all"){
				this.receipts = this._allReceipts;
			} else if(this._selection == "credit"){
				this.receipts = this._creditReceipts;
			} else {
				//this._selection == "debit"
				this.receipts = this._debitReceipts;
			}
		});
	}

	private static findValueColor(receipt: Receipt): string{
		//TODO: figure out what colors would be best
		// do, once server connection works (so we know how the values are really formatted)
		switch(receipt.histType){
			case HistoryType.TopUp:
				return "GREEN";

			case HistoryType.Withdraw:
				return "RED";

			default:
			case HistoryType.Order:
				return "BLACK";
		}
	}

	private static findIconString(receipt: Receipt): string{
		switch(receipt.histType){
			case HistoryType.TopUp:
				return "arrow-up";

			case HistoryType.Withdraw:
				return "arrow-down";

			default:
			case HistoryType.Order:
				return "wine";
		}
	}
}
