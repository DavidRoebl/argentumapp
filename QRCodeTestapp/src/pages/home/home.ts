import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
//import {BarcodeScanner} from '@ionic-native/barcode-scanner';


@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	
	scannerAvailable:boolean = false;
	scanned_text:String = "nothing scanned so far :(";

	constructor(public navCtrl: NavController, private qrScanner: QRScanner, private zone: NgZone) {
		this.qrScanner.prepare().then((status: QRScannerStatus) => {
			if(status.authorized){
				console.log("permission granted");
				//camera permission was granted
				this.scannerAvailable = true;
				this.qrScanner.show();
					
			} else if (status.denied){
				console.log("permission denied");
				//permission denied permanently
				// user needs to allow permission in settings
				//use QRScanner.openSettings() to guide user there

			} else {
					console.log("permission temproarily not granted");
				//permission temporarily not granted
				//TODO: make dialog that tells user why we need the permission,
				// and then ask again
			}
		}).catch((e: any) => console.log('Error is', e));
	}

	updateScannedText(text: String){

		//using NgZone seems to be a popular hack to tell angular that it needs to update the view
		// otherwise the "auto"-update stuff does NOT work (e.g. on Android, you need to force a rebuild of the view (e.g. via turning the device) to get the new value)
		this.zone.run(() => {	
			this.scanned_text = text;
		});
	}

	scan(){
		if(this.scannerAvailable){
			console.log("scanning started");
			//start scanning
			let scanSub = this.qrScanner.scan().subscribe((text : string) => {
				console.log(text);
				console.log('Scanned something, ', text, ' ... scan successful?');
				//this.scanned_text = text;
				this.updateScannedText(text);
				this.qrScanner.hide();
				scanSub.unsubscribe();
			});
		} else {
			console.log("not scanning because of permission problems :(");
		}
	}
}