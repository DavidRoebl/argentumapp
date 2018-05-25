import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

import { CurrentPage } from '../current/current';

import { CardIdProvider } from '../../providers/card-id/card-id';

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-scan',
	templateUrl: 'scan.html',
})
export class ScanPage {

	constructor(public navCtrl: NavController,
			public navParams: NavParams, 
			private qrScanner: QRScanner,
			private cardIdProvider: CardIdProvider,
			public toastCtrl:ToastController) {

		// mocking scanning because the camera can't really 
		// detect qrcodes displayed on another screen and i don't have a printer at hand
		//this.mockScan();
		this.prepareScanner();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ScanPage');
	}

	prepareScanner(){
		this.qrScanner.prepare()
			.then((status: QRScannerStatus) => {
				if(status.authorized){
					//permission was granted
					this.qrScanner.show();
					this.scan();
				} else if(status.denied){
					//permission denied permanently
					//user needs to allow permission in settings
					this.qrScanner.openSettings();
				} else {
					//permission temporarily not granted
					//TODO: make dialog that tells user to allow permission & ask again
					this.prepareScanner();
				}
			})
			.catch((e: any) => console.log('Error is ' + e));
	}

	scan(){
		let scanSub = this.qrScanner.scan()
			.subscribe((qrcode: any) => {

				let text: string = qrcode.result;

				console.log("scanned card: " + text);

				//store scanned text
				let pin = this.cardIdProvider.setCardId(text);
				console.log(pin);
				
				//navigate to next view
				this.navCtrl.push(CurrentPage);

				this.qrScanner.hide();
				scanSub.unsubscribe();
			});
	}

	mockScan(){
		let pin = this.cardIdProvider.setCardId("ed163c5c-b271-4b12-976a-e776c937ff6e");
		console.log(pin);

		this.navCtrl.push(CurrentPage);
	}
}
