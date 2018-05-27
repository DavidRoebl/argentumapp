import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ScanPage } from '../scan/scan';
import { CurrentPage } from '../current/current';

import { CardProvider} from '../../providers/card/card';

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

	cardId: string;

	constructor(public navCtrl: NavController,
			public navParams: NavParams,
			private cardProvider: CardProvider) {}

	handleLogin(){
		this.cardProvider.cardId = (this.cardId);
		this.navCtrl.push(CurrentPage);
	}

	doNavigation(){
		this.navCtrl.push(ScanPage);
	}
}
