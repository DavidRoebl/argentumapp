import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


import {SettingsPage} from '../settings/settings';
import {FestivalProvider, Festival} from '../../providers/festival/festival';


declare module "../../providers/festival/festival" {
	interface Festival {
		backgroundImageUrl: string;
	}
}

/**
 * Generated class for the FuturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-future',
	templateUrl: 'future.html',
})
export class FuturePage {

	private static IMAGE_ASSET_PATH: string = "./assets/imgs/";

	rootNavCtrl: NavController;
	festivals: Festival[];

	constructor(public navCtrl: NavController, 
		public navParams: NavParams,
		private festivalProvider: FestivalProvider,
		private zone: NgZone,
		private toastCtrl: ToastController) {
		this.rootNavCtrl = navParams.get('rootNavCtrl');

		festivalProvider.getFutureFestivals()
			.then((festivals) => {
				festivals.forEach((festival, index) =>{
					festival.backgroundImageUrl = FuturePage.getBackgroundUrl(index);		
				});

				this.zone.run(()=>{
					this.festivals = festivals;
				});
			})
			.catch((error) => {
				console.error("FuturePage: could not load future festivals: " + error);
			})
	}

	ionViewDidLoad() {}


	onFestivalClick(festival: Festival){
		if(festival.facebookUrl){
			window.open(festival.facebookUrl, "_system");
		} else {
			let toast = this.toastCtrl.create({
		      message: 'Sorry! No URL is available for ' + festival.name + '.',
		      duration: 3000, //millis i guess?
		      position: 'bottom'
		    });
		    toast.present();
		}
	}

	openSettings(){
		this.rootNavCtrl.push(SettingsPage);
	}

	private static getBackgroundUrl(selector: number){
		switch(selector % 7){
			case 0:
			return FuturePage.IMAGE_ASSET_PATH + "background_blue.jpg";

			case 1:
			return FuturePage.IMAGE_ASSET_PATH + "background_green.jpg";

			case 2:
			return FuturePage.IMAGE_ASSET_PATH + "background_lightblue.jpg";

			case 3:
			return FuturePage.IMAGE_ASSET_PATH + "background_orange.jpg";

			case 4:
			return FuturePage.IMAGE_ASSET_PATH + "background_pink.jpg";

			case 5:
			return FuturePage.IMAGE_ASSET_PATH + "background_red.jpg";

			default:
			case 6:
			return FuturePage.IMAGE_ASSET_PATH + "background_yellow.jpg";

		}
	}
}
