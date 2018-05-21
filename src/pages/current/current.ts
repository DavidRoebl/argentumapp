import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as HighCharts from 'highcharts';

import {ReceiptsPage} from '../receipts/receipts';
import {SettingsPage} from '../settings/settings';

import {FestivalProvider, Festival} from '../../providers/festival/festival';
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

	rootNavCtrl: NavController;
	currentFestival: Festival;
	myCard: Card;

	constructor(public navCtrl: NavController, 
			public navParams: NavParams, 
			private cardIdProvider: CardIdProvider, 
			private festivalProvider: FestivalProvider,
			private cardProvider: CardProvider,
			private zone: NgZone) {
		this.rootNavCtrl = navParams.get('rootNavCtrl');

		this.currentFestival = Festival.EMPTY_FESTIVAL;
		festivalProvider.getCurrentFestival(cardIdProvider.cardId)
			.then((festival) => {
				console.log("CurrentPage: successfully loaded FESTIVAL");
				this.zone.run(() =>{
					this.currentFestival = festival;	
				});
			})
			.catch((error) =>{
				console.log("CurrentPage: tried to get current festival, caught: " + error);
			});

		this.myCard = Card.EMPTY_CARD;
		cardProvider.cardStatus(cardIdProvider.cardId)
			.then((card) => {
				console.log("CurrentPage: successfully loaded CARD");
				this.zone.run(() =>{				
					this.myCard = card;
				});
			})
			.catch((error) =>{
				console.log("CurrentPage: tried to get card, caught: " + error);
			});
	}
	
	ionViewDidLoad() {
		var myChart = HighCharts.chart('container', {
			chart: {
				type: 'line'
			},
			title: {
				text: 'Receipts amount'
			},
			xAxis: {
				type: 'datetime'
			},
			yAxis: {
		 		title: {
					text: 'amount'
				}
			},
			series: [{
				name: 'Amount',
				data: [1.25, 0.5, 4, 2.5, 3.2, 2]
			}]
		});

	}

	doNavigation(){
		this.navParams.get('rootNavCtrl')
		this.rootNavCtrl.push(ReceiptsPage);
	}

	openSettings(){
		this.rootNavCtrl.push(SettingsPage);
	}
}
