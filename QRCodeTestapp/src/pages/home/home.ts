import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
//import {BarcodeScanner} from '@ionic-native/barcode-scanner';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	
	scannerAvailable:boolean = false;
	scanned_text:String = "nothing scanned so far :(";

	constructor(public navCtrl: NavController, private qrScanner: QRScanner) {
		this.qrScanner.prepare().then((status: QRScannerStatus) => {
			if(status.authorized){
				console.log("permission granted");
				//camera permission was granted
				this.scannerAvailable = true;
					
			} else if (status.denied){
				console.log("permission denied");
				//permission denied permanently
				// user needs to allow permission in settings
				//use QRScanner.openSettings() to guide user there

			} else {
					console.log("permission temproarily not granted");
				//permission temporarily not granted
			}
		}).catch((e: any) => console.log('Error is', e));
	}

	scan(){
		if(this.scannerAvailable){
			console.log("scanning started");
			//start scanning
			let scanSub = this.qrScanner.scan().subscribe((text : string) => {
				console.log('Scanned something, ', text);
				this.scanned_text = text;
				this.qrScanner.hide();
				scanSub.unsubscribe();
			});
		} else {
			console.log("not scanning because of permission problems :(");
		}
	}
}