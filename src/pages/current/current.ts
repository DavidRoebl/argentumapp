import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as HighCharts from 'highcharts';

import {ReceiptsPage} from '../receipts/receipts';
import {SettingsPage} from '../settings/settings';

import {FestivalProvider, Festival} from '../../providers/festival/festival';
import {CardIdProvider} from '../../providers/card-id/card-id';
import {CardProvider, Card} from '../../providers/card/card';
import {ReceiptProvider, Receipt} from '../../providers/receipt/receipt';
import { ToastController } from 'ionic-angular';

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

  rootNavCtrl:NavController;
  currentFestival:Festival;
  myCard:Card;

  private receipts:Receipt[];
  private viewDidLoad:boolean = false;
  private shouldShowChart:boolean = false;

  constructor(public navCtrl:NavController,
              public navParams:NavParams,
              private cardIdProvider:CardIdProvider,
              private festivalProvider:FestivalProvider,
              private cardProvider:CardProvider,
              private receiptProvider:ReceiptProvider,
              private zone:NgZone,
              public toastCtrl:ToastController) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');


    this.currentFestival = Festival.EMPTY_FESTIVAL;
    festivalProvider.getCurrentFestival(cardIdProvider.cardId)
      .then((festival) => {
        console.log("CurrentPage: successfully loaded FESTIVAL");
        this.zone.run(() => {
          this.currentFestival = festival;
        });
        this.loadReceipts(festival);
      })
      .catch((error) => {
        console.error("CurrentPage: tried to get current festival, caught: " + error);
      });

    this.myCard = Card.EMPTY_CARD;
    cardProvider.cardStatus(cardIdProvider.cardId)
      .then((card) => {
        console.log("CurrentPage: successfully loaded CARD");
        this.zone.run(() => {
          this.myCard = card;
        });
      })
      .catch((error) => {
        console.error("CurrentPage: tried to get card, caught: " + error);
      });


  }

  ionViewDidLoad() {
    console.log("CurrentPage: ionViewDidLoad() start");
    if (this.shouldShowChart) {
      this.shouldShowChart = false;
      this.showChart(this.receipts);
    }
    this.viewDidLoad = true;
    this.showToastWithCloseButton();
    console.log("CurrentPage: ionViewDidLoad() end");
  }

  private showChartViewSafe(receipts:Receipt[]) {
    console.log("CurrentPage: showChartViewSafe() start");
    if (this.viewDidLoad) {
      this.showChart(receipts);
    } else {
      this.receipts = receipts;
      this.shouldShowChart = true;
    }
    console.log("CurrentPage: showChartViewSafe() end");
  }


  private loadReceipts(festival:Festival) {
    this.receiptProvider.getReceipts(festival.id, this.cardIdProvider.cardId)
      .then((receipts) => {
        console.log("CurrentPage: receipts loaded");
        this.showChartViewSafe(receipts);

      })
      .catch((error) => {
        console.error("CurrentPage tried to get receipts for current festival, caught: " + error);
      });
  }


  /*
   * DO NOT CALL UNLESS YOU KNOW WHAT YOU ARE DOING
   */
  private showChart(receipts:Receipt[]) {
    console.log("CurrentPage: showChart() start");
    var data:any = [];
    receipts.forEach((receipt) => {
      let arr = [receipt.date.getTime(), receipt.value / 100];
      console.log(arr);
      data.push(arr);
    });

    console.log(data);

    var myChart = HighCharts.chart('container', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Receipt amount over time'
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: 'Date'
        }
      },
      yAxis: {
        title: {
          text: 'EUR'
        }
      },
      series: [
        {
          name: 'EUR',
          data: data
        }
      ]
    });

    console.log("CurrentPage: showChart() end");
  }

  doNavigation() {
    this.navParams.get('rootNavCtrl')
    this.rootNavCtrl.push(ReceiptsPage);
  }

  openSettings() {
    this.rootNavCtrl.push(SettingsPage);
  }


  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: "Your Pin is set: " + (this.cardIdProvider.pin).toString(),
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

}
