import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {SettingsPage} from '../settings/settings';

import {ReceiptProvider, Receipt} from '../../providers/receipt/receipt';
import {BeverageProvider, Beverage} from '../../providers/beverage/beverage';

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
	public beverages: Beverage[] = [];

	constructor(public navCtrl: NavController, 
			public navParams: NavParams, 
			private receiptProvider: ReceiptProvider,
			private beverageProvider: BeverageProvider,
			private zone: NgZone,
			private toastCtrl: ToastController) {
		this.receipt = receiptProvider.selectedReceipt;
		if(!this.receipt){
			console.error("could not get receipt. aborting!");
			return;
		}
		let beverages = this.receipt.beverages;
		beverages.forEach((beverageId) => {
			beverageProvider.getBeverage(beverageId)
				.then((beverage) => {
					if(beverage){
						this.zone.run(()=>{
							this.beverages.push(beverage);
						});
					} else {
						console.error("ReceiptDetailPage: getting beverage returned null... WTF (id was: " + beverageId + ")");
					}
				})
				.catch((error) => {
					console.error("ReceiptDetailPage: could not get beverage for id: " + beverageId + "; error was: " + error);
				});
		});
	}

	openSettings(){
		this.navCtrl.push(SettingsPage);
	}

	printReceipt(){
		if(this.receipt.receiptUrl){
			window.open(this.receipt.receiptUrl, "_system");
		} else {
			let toast = this.toastCtrl.create({
		      message: 'Sorry! No PDF is available for this receipt.',
		      duration: 3000, //millis i guess?
		      position: 'bottom'
		    });
		    toast.present();
		}
	}
}
