import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { QRScanner } from '@ionic-native/qr-scanner';
import { IonicStorageModule } from '@ionic/storage';
//import { HighCharts} from 'highcharts';

import { CurrentPage } from '../pages/current/current';
import { LoginPage } from '../pages/login/login';
import { ReceiptsPage } from '../pages/receipts/receipts';
import { SettingsPage } from '../pages/settings/settings';
import { ScanPage } from '../pages/scan/scan';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReceiptProvider } from '../providers/receipt/receipt';
import { BeverageProvider } from '../providers/beverage/beverage';
import { CardIdProvider } from '../providers/card-id/card-id';
import { CardProvider } from '../providers/card/card';

@NgModule({
  declarations: [
    MyApp,
    CurrentPage,
    LoginPage,
    ReceiptsPage,
    SettingsPage,
    ScanPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    IonicStorageModule.forRoot(),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CurrentPage,
    LoginPage,
    ReceiptsPage,
    SettingsPage,
    ScanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReceiptProvider,
    BeverageProvider,
    CardIdProvider,
    CardProvider
  ]
})
export class AppModule {}
