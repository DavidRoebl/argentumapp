import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import {ReceiptsPage} from '../receipts/receipts';
import {SettingsPage} from '../settings/settings';

import {CardProvider, Card} from '../../providers/card/card';

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

	myCard:Card;

	constructor(public navCtrl:NavController,
				public navParams:NavParams,
				private cardProvider:CardProvider,
				private toastController: ToastController,
				private zone:NgZone) {

		this.myCard = Card.EMPTY_CARD;
		this.cardProvider.cardStatus()
			.then((card) => {
				this.zone.run(() => {
					this.myCard = card;
				});
			})
			.catch(() => {
				const toast = this.toastController.create({
					message: "Invalid card ID. Please try again to scan your card.",
					duration: 3000
				});
				toast.present();
				navCtrl.popToRoot();
			});
	}

	doNavigation() {
		this.navCtrl.push(ReceiptsPage);
	}

	openSettings() {
		this.navCtrl.push(SettingsPage);
	}
}