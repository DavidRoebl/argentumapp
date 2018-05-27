webpackJsonp([5],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_receipt_receipt__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_card_card__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ReceiptsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReceiptsPage = /** @class */ (function () {
    // type: 0 = order
    // type: 1 = topup
    // type: 2 = withdraw
    function ReceiptsPage(navCtrl, navParams, receiptProvider, cardProvider, zone, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.receiptProvider = receiptProvider;
        this.cardProvider = cardProvider;
        this.zone = zone;
        this.toastCtrl = toastCtrl;
        this._selection = "order";
        this._orderReceipts = [];
        this._topUpReceipts = [];
        this._withdrawReceipt = [];
        this.receiptProvider.getReceipts(this.cardProvider.cardId)
            .then(function (receipts) {
            receipts.forEach(function (receipt) {
                switch (receipt.Type) {
                    case 2:
                        //found: withdraw
                        _this._withdrawReceipt.push(receipt);
                        receipt.iconString = "arrow-down";
                        receipt.bgColor = "#e5e5e5";
                        break;
                    case 1:
                        //found: topup
                        _this._topUpReceipts.push(receipt);
                        receipt.iconString = "arrow-up";
                        receipt.bgColor = "#e5e5e5";
                        break;
                    default:
                    case 0:
                        //found: order
                        _this._orderReceipts.push(receipt);
                        receipt.iconString = "wine";
                        receipt.bgColor = "#ffffff";
                        break;
                }
            });
            _this.zone.run(function () {
                _this.showSelected();
            });
        })
            .catch(function (error) {
            //TODO: handle error
        });
    }
    Object.defineProperty(ReceiptsPage.prototype, "selection", {
        get: function () {
            return this._selection;
        },
        set: function (value) {
            this._selection = value;
            this.showSelected();
        },
        enumerable: true,
        configurable: true
    });
    ReceiptsPage.prototype.openSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    ReceiptsPage.prototype.onReceiptClick = function (receipt) {
        if (receipt.ReceiptUrl && receipt.ReceiptUrl != "") {
            window.open(receipt.ReceiptUrl, "_system");
        }
        else {
            if (receipt.Type == 0) {
                var toast = this.toastCtrl.create({
                    message: "Sorry, no receipt available. Please contact the organizer.",
                    duration: 3000
                });
                toast.present();
            }
        }
    };
    ReceiptsPage.prototype.showSelected = function () {
        var _this = this;
        this.zone.run(function () {
            if (_this._selection == "withdraw") {
                _this.receipts = _this._withdrawReceipt;
            }
            else if (_this._selection == "topup") {
                _this.receipts = _this._topUpReceipts;
            }
            else {
                //show order receipts
                _this.receipts = _this._orderReceipts;
            }
        });
    };
    ReceiptsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-receipts',template:/*ion-inline-start:"D:\WORKSPACE\paytival\argentumapp\src\pages\receipts\receipts.html"*/'<!--\n\n  Generated template for the ReceiptsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n <!--<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en"></script>-->\n\n\n\n<ion-header no-border>\n\n  <ion-navbar transparent>\n\n    <ion-buttons [color]="plain-white" end>\n\n      <button ion-button (click)="openSettings()">\n\n        <ion-icon name="settings" style="zoom:1.8;" ></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n<ion-toolbar no-border-top transparent>\n\n    <ion-segment [(ngModel)]="selection">\n\n      <ion-segment-button value="topup">\n\n        <div class="textlabels">top up</div>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="order">\n\n        <div class="textlabels">order</div>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="withdraw">\n\n        <div class="textlabels">withdraw</div>\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let receipt of receipts" no-lines round (click)="onReceiptClick(receipt)" [ngStyle]="{\'background-color\': \'transparent\'}">\n\n      <ion-card [ngStyle]="{\'background-color\': receipt.bgColor}">\n\n        <ion-card-header>\n\n            <ion-card-title>\n\n              <ion-icon style="float: left;" name={{receipt.iconString}}></ion-icon>\n\n              <span style="float:right" >{{(receipt.Value / 100)|currency:\'EUR\'}}</span>\n\n          </ion-card-title>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <p>{{receipt.Date|date:\'dd.MM.yy HH:mm\'}}</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\WORKSPACE\paytival\argentumapp\src\pages\receipts\receipts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_receipt_receipt__["a" /* ReceiptProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_card_card__["b" /* CardProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ReceiptsPage);
    return ReceiptsPage;
}());

//# sourceMappingURL=receipts.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scan_scan__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__current_current__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_card_card__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, cardProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cardProvider = cardProvider;
    }
    LoginPage.prototype.handleLogin = function () {
        this.cardProvider.cardId = (this.cardId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__current_current__["a" /* CurrentPage */]);
    };
    LoginPage.prototype.doNavigation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__scan_scan__["a" /* ScanPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\WORKSPACE\paytival\argentumapp\src\pages\login\login.html"*/'<!--\n\n	Generated template for the LoginPage page.\n\n\n\n	See http://ionicframework.com/docs/components/#navigation for more info on\n\n	Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content>\n\n\n\n	<img src="./assets/imgs/scan_paytival.png" (click)="doNavigation()"/>\n\n\n\n	<div class="textor">\n\n		or\n\n	</div>\n\n\n\n<!--\n\n	<div class="textpin">\n\n		Enter your received PIN\n\n	</div>\n\n-->\n\n		<ion-item margin-top>\n\n			<ion-label floating>enter your card ID manually.</ion-label>\n\n			<ion-input \n\n					[(ngModel)] = "cardId"\n\n					(keyup.enter)="handleLogin()"\n\n					>\n\n					<!-- max length does not seem to work in chrome; need to validate on ios/android -->\n\n				</ion-input>\n\n		</ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\WORKSPACE\paytival\argentumapp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_card_card__["b" /* CardProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__current_current__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_card_card__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanPage = /** @class */ (function () {
    function ScanPage(navCtrl, navParams, qrScanner, cardProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.cardProvider = cardProvider;
        this.toastCtrl = toastCtrl;
        this.prepareScanner();
    }
    ScanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScanPage');
    };
    ScanPage.prototype.prepareScanner = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                _this.showToast("status: authorized, starting scan");
                //permission was granted
                _this.qrScanner.show();
                _this.scan();
            }
            else if (status.denied) {
                _this.showToast("status: denied -- opening settings");
                //permission denied permanently
                //user needs to allow permission in settings
                _this.qrScanner.openSettings();
            }
            else {
                _this.showToast("status: other; retrying");
                //permission temporarily not granted
                //TODO: make dialog that tells user to allow permission & ask again
                _this.prepareScanner();
            }
        })
            .catch(function (e) {
            console.log('Error is ' + e);
            _this.showToast("error: " + e.name + ": " + e._message);
        });
    };
    ScanPage.prototype.scan = function () {
        var _this = this;
        var scanSub = this.qrScanner.scan()
            .subscribe(function (qrcode) {
            var text = qrcode.result;
            console.log("scanned card: " + text);
            //store scanned text
            _this.cardProvider.cardId = text;
            //navigate to next view
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__current_current__["a" /* CurrentPage */]);
            _this.qrScanner.hide();
            scanSub.unsubscribe();
        });
    };
    ScanPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            showCloseButton: true
        });
        toast.present();
    };
    ScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scan',template:/*ion-inline-start:"D:\WORKSPACE\paytival\argentumapp\src\pages\scan\scan.html"*/'<!--\n\n  Generated template for the ScanPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>scan</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n-->\n\n\n\n<ion-content padding style="background: none transparent;">\n\n\n\n  <img src="./assets/imgs/fadenkreuz_scan.png"/>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\WORKSPACE\paytival\argentumapp\src\pages\scan\scan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_4__providers_card_card__["b" /* CardProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ScanPage);
    return ScanPage;
}());

//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/current/current.module": [
		305,
		4
	],
	"../pages/login/login.module": [
		306,
		3
	],
	"../pages/receipts/receipts.module": [
		307,
		2
	],
	"../pages/scan/scan.module": [
		308,
		1
	],
	"../pages/settings/settings.module": [
		309,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptProvider; });
/* unused harmony export Receipt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
    Generated class for the ReceiptProvider provider.

    See https://angular.io/guide/dependency-injection for more info on providers
    and Angular DI.
*/
var ReceiptProvider = /** @class */ (function () {
    function ReceiptProvider(http) {
        this.http = http;
        this.selectedReceipt = null;
    }
    ReceiptProvider_1 = ReceiptProvider;
    ReceiptProvider.prototype.getReceipts = function (cardId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('https://api.paytival.com//history/' + ReceiptProvider_1.festivalId + "/" + cardId)
                .subscribe(function (data) {
                var receipts = data;
                resolve(receipts);
            }, function (error) {
                reject();
            });
        });
    };
    ReceiptProvider.festivalId = 5754258133614592;
    ReceiptProvider = ReceiptProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ReceiptProvider);
    return ReceiptProvider;
    var ReceiptProvider_1;
}());

/**
 * bean
 */
var Receipt = /** @class */ (function () {
    function Receipt(Value, Type, ReceiptUrl, CardID, FestivalID, Date, Beverages) {
        this.Value = Value;
        this.Type = Type;
        this.ReceiptUrl = ReceiptUrl;
        this.CardID = CardID;
        this.FestivalID = FestivalID;
        this.Date = Date;
        this.Beverages = Beverages;
    }
    return Receipt;
}());

//# sourceMappingURL=receipt.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_qr_scanner__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_current_current__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_receipts_receipts__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_scan_scan__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_receipt_receipt__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_card_card__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { HighCharts} from 'highcharts';









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_current_current__["a" /* CurrentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_receipts_receipts__["a" /* ReceiptsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_scan_scan__["a" /* ScanPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/current/current.module#CurrentPageModule', name: 'CurrentPage', segment: 'current', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receipts/receipts.module#ReceiptsPageModule', name: 'ReceiptsPage', segment: 'receipts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scan/scan.module#ScanPageModule', name: 'ScanPage', segment: 'scan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_current_current__["a" /* CurrentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_receipts_receipts__["a" /* ReceiptsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_scan_scan__["a" /* ScanPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_qr_scanner__["a" /* QRScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_receipt_receipt__["a" /* ReceiptProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_card_card__["b" /* CardProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\WORKSPACE\paytival\argentumapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\WORKSPACE\paytival\argentumapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CardProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
    Generated class for the CardProvider provider.

    See https://angular.io/guide/dependency-injection for more info on providers
    and Angular DI.
*/
var CardProvider = /** @class */ (function () {
    function CardProvider(http) {
        this.http = http;
        this._cardId = null;
    }
    Object.defineProperty(CardProvider.prototype, "cardId", {
        get: function () {
            return this._cardId;
        },
        set: function (cardId) {
            this._cardId = cardId;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * always loads card information from server to get most up-to-date data
     */
    CardProvider.prototype.cardStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('https://api.paytival.com/card_information/' + _this._cardId)
                .subscribe(function (data) {
                //don't need to parse json because this is done automatically
                var card = data;
                resolve(card);
            }, function (error) {
                reject();
            });
        });
    };
    CardProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CardProvider);
    return CardProvider;
}());

var Card = /** @class */ (function () {
    function Card(ID, CardID, CreatedAt, Credit) {
        this.ID = ID;
        this.CardID = CardID;
        this.CreatedAt = CreatedAt;
        this.Credit = Credit;
    }
    Card.EMPTY_CARD = new Card("", "", "", 0);
    return Card;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__receipts_receipts__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_card_card__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CurrentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CurrentPage = /** @class */ (function () {
    function CurrentPage(navCtrl, navParams, cardProvider, toastController, zone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cardProvider = cardProvider;
        this.toastController = toastController;
        this.zone = zone;
        this.myCard = __WEBPACK_IMPORTED_MODULE_4__providers_card_card__["a" /* Card */].EMPTY_CARD;
        this.cardProvider.cardStatus()
            .then(function (card) {
            _this.zone.run(function () {
                _this.myCard = card;
            });
        })
            .catch(function () {
            var toast = _this.toastController.create({
                message: "Invalid card ID. Please try again to scan your card.",
                duration: 3000
            });
            toast.present();
            navCtrl.popToRoot();
        });
    }
    CurrentPage.prototype.doNavigation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__receipts_receipts__["a" /* ReceiptsPage */]);
    };
    CurrentPage.prototype.openSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */]);
    };
    CurrentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-current',template:/*ion-inline-start:"D:\WORKSPACE\paytival\argentumapp\src\pages\current\current.html"*/'<!--\n\n  Generated template for the CurrentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header no-border>\n\n\n\n  <ion-navbar color="plain_white">\n\n        <ion-buttons [color]="plain-white" end>\n\n    	<button ion-button (click)="openSettings()">\n\n    		<ion-icon name="settings" style="zoom:1.8;" ></ion-icon>\n\n    	</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content no-margin>\n\n  <!-- <img src="./assets/imgs/background_yellow.jpg"/> -->\n\n  <div id="containerbeides">\n\n    <div class="containeroval"></div>\n\n\n\n    <div id="oval">\n\n      <div class="credit">\n\n        {{(myCard.Credit / 100)|currency:\'EUR\'}}\n\n      </div>\n\n      <div class="textavailablecredit">available credit</div>\n\n      <div class="locationdashboard">IF Sommerfest</div>\n\n      <div class="datedashboard">30. Mai 2018</div>\n\n    </div>\n\n  </div>\n\n\n\n  <div id="container" width="auto !important"></div>\n\n\n\n<div class="buttontransaction">\n\n	<button\n\n\n\n      ion-button\n\n      round\n\n      icon-right\n\n      large\n\n      (click)="doNavigation()"\n\n    >Show Transactions <ion-icon name="arrow-dropdown"></ion-icon>\n\n  </button>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\WORKSPACE\paytival\argentumapp\src\pages\current\current.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_card_card__["b" /* CardProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], CurrentPage);
    return CurrentPage;
}());

//# sourceMappingURL=current.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () { };
    SettingsPage.prototype.logout = function () {
        this.navCtrl.popToRoot();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\WORKSPACE\paytival\argentumapp\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content no-margin>\n\n\n\n  <ion-card round>\n\n    <ion-card-header>\n\n      Settings\n\n    </ion-card-header>\n\n\n\n\n\n    <button ion-button round margin (click)="logout()">logout</button>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\WORKSPACE\paytival\argentumapp\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map