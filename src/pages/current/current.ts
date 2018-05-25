import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as HighCharts from 'highcharts';

import {ReceiptsPage} from '../receipts/receipts';
import {SettingsPage} from '../settings/settings';

import {CardIdProvider} from '../../providers/card-id/card-id';
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
							private cardIdProvider:CardIdProvider,
							private cardProvider:CardProvider,
							private zone:NgZone) {

		this.myCard = Card.EMPTY_CARD;
		cardProvider.cardStatus(cardIdProvider.cardId)
			.then((card) => {
				console.log("CurrentPage: successfully loaded CARD");
				this.zone.run(() => {
					this.myCard = card;
				});
			})
			.catch((error) => {
				console.error("CurrentPage: tried to get card, caught: " + error);
			});


	}

	doNavigation() {
		this.navCtrl.push(ReceiptsPage);
	}

	openSettings() {
		this.navCtrl.push(SettingsPage);
	}
}