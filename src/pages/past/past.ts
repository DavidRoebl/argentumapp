import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ReceiptsPage} from '../receipts/receipts';
import {SettingsPage} from '../settings/settings';
import {FestivalProvider, Festival} from '../../providers/festival/festival';
import {CardIdProvider} from '../../providers/card-id/card-id';

declare module "../../providers/festival/festival" {
	interface Festival {
		backgroundImageUrl: string;
	}
}

/**
 * Generated class for the PastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-past',
	templateUrl: 'past.html',
})
export class PastPage {

	private static IMAGE_ASSET_PATH: string = "./assets/imgs/";

	rootNavCtrl: NavController;
	festivals: Festival[];

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		private festivalProvider: FestivalProvider,
		private cardIdProvider: CardIdProvider,
		private zone: NgZone) {
		this.rootNavCtrl = navParams.get('rootNavCtrl');

		festivalProvider.getPastFestivals(cardIdProvider.cardId)
			.then((festivals) => {
				festivals.forEach((festival, index) =>{
					festival.backgroundImageUrl = PastPage.getBackgroundUrl(index);		
				});

				this.zone.run(() => {
					this.festivals = festivals;
				});
			})
			.catch((error) =>{
				console.error("PastPage: could not load past festivals: " + error);
			});
	}
		doNavigation(){
	//	this.navCtrl.pop();
		this.rootNavCtrl.push(ReceiptsPage);
	}
	
	openSettings(){
		this.rootNavCtrl.push(SettingsPage);
	}

	private static getBackgroundUrl(selector: number){
		switch(selector % 7){
			case 6:
			return PastPage.IMAGE_ASSET_PATH + "background_blue.jpg";

			case 5:
			return PastPage.IMAGE_ASSET_PATH + "background_green.jpg";

			case 4:
			return PastPage.IMAGE_ASSET_PATH + "background_lightblue.jpg";

			case 3:
			return PastPage.IMAGE_ASSET_PATH + "background_orange.jpg";

			case 2:
			return PastPage.IMAGE_ASSET_PATH + "background_pink.jpg";

			case 1:
			return PastPage.IMAGE_ASSET_PATH + "background_red.jpg";

			default:
			case 0:
			return PastPage.IMAGE_ASSET_PATH + "background_yellow.jpg";

		}
	}
}
