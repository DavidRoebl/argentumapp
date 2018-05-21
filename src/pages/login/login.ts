import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ScanPage } from '../scan/scan';
import { TabsPage } from '../tabs/tabs';

import { CardIdProvider} from '../../providers/card-id/card-id';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	passcode: number;

	constructor(public navCtrl: NavController,
			public navParams: NavParams,
			private cardIdProvider: CardIdProvider) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

	handleLogin(){
		this.cardIdProvider.getCardIdForPin(this.passcode)
			.then((cardId) =>{
				if(cardId){
					//success!!
					console.log("LoginPage: successfully got card id");

					//remove passcode input
					this.passcode = NaN;

					//now navigate to tabs page
					this.navCtrl.push(TabsPage);

				} else {
					console.error("LoginPage: could not load cardId for pin: " + this.passcode + "; cardId was null!!");
				}
			})
			.catch((error) => {
				console.error("LoginPage: could not load cardId for pin: " + this.passcode + "; error: " + error);
			});
	}

	doNavigation(){
		this.navCtrl.push(ScanPage);
	}
}
