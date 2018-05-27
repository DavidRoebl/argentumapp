import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

import { CurrentPage } from '../current/current';

import { CardProvider } from '../../providers/card/card';

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
			private cardProvider: CardProvider,
			private toastCtrl: ToastController) {

		this.prepareScanner();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ScanPage');
	}

	prepareScanner(){
		this.qrScanner.prepare()
			.then((status: QRScannerStatus) => {
				if(status.authorized){
					this.showToast("status: authorized, starting scan");
					//permission was granted
					this.qrScanner.show();
					this.scan();
				} else if(status.denied){
					this.showToast("status: denied -- opening settings");
					//permission denied permanently
					//user needs to allow permission in settings
					this.qrScanner.openSettings();
				} else {
					this.showToast("status: other; retrying");
					//permission temporarily not granted
					//TODO: make dialog that tells user to allow permission & ask again
					this.prepareScanner();
				}
			})
			.catch((e: any) => {
				console.log('Error is ' + e);
				this.showToast("error: " + e.name + ": " + e._message);
			});
	}

	scan(){
		let scanSub = this.qrScanner.scan()
			.subscribe((qrcode: any) => {

				let text: string = qrcode.result;

				console.log("scanned card: " + text);

				//store scanned text
				this.cardProvider.cardId = text;
				
				//navigate to next view
				this.navCtrl.push(CurrentPage);

				this.qrScanner.hide();
				scanSub.unsubscribe();
			});
	}

	private showToast(message: string){
		const toast = this.toastCtrl.create({
			message: message,
			showCloseButton: true
		});
		toast.present();
	}

//	mockScan(){
//		this.cardProvider.cardId = "ed163c5c-b271-4b12-976a-e776c937ff6e";
//		this.navCtrl.push(CurrentPage);
//	}
}
