import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import {TabsPage} from '../tabs/tabs'
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner) {
  		this.prepareScanner();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  	prepareScanner(){
  		this.qrScanner.prepare().then((status: QRScannerStatus) => {
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
  		}).catch((e: any) => console.log('Error is ' + e));
  	}

  	scan(){
		let scanSub = this.qrScanner.scan().subscribe((text: string) => {
			//store scanned text
			//navigate to next view
			this.navCtrl.push(TabsPage);

			this.qrScanner.hide();
			scanSub.unsubscribe();
		});
  	}
}
