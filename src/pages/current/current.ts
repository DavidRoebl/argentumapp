import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as HighCharts from 'highcharts';

import {ReceiptsPage} from '../receipts/receipts';
import {SettingsPage} from '../settings/settings';

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

  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentPage');

   var myChart = HighCharts.chart('container', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Receipts amount'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'amount'
        }
      },
      series: [{
        name: 'Amount',
        data: [1.25, 0.5, 4, 2.5, 3.2, 2]
      }]
    });

  }

    doNavigation(){
  //	this.navCtrl.pop();
  this.navParams.get('rootNavCtrl')
  	this.rootNavCtrl.push(ReceiptsPage);
  }

  openSettings(){
    this.rootNavCtrl.push(SettingsPage);
  }
}
