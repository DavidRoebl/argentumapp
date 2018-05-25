webpackJsonp([5],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_receipt_receipt__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_card_id_card_id__ = __webpack_require__(42);
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
    //TODO: tab nav aufteilen order/topup/withdraw
    // type: 0 = order
    // type: 1 = topup
    // type: 2 = withdraw
    function ReceiptsPage(navCtrl, navParams, receiptProvider, cardIdProvider, zone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.receiptProvider = receiptProvider;
        this.cardIdProvider = cardIdProvider;
        this.zone = zone;
        receiptProvider.getReceipts(cardIdProvider.cardId)
            .then(function (receipts) {
            console.log("ReceiptsPage: successfully loaded receipts");
            _this.zone.run(function () {
                _this.receipts = receipts;
            });
        })
            .catch(function (error) {
            console.error("ReceiptsPage: coule not get receipts; error: " + error);
        });
    }
    ReceiptsPage.prototype.openSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    ReceiptsPage.prototype.onReceiptClick = function (receipt) {
        if (receipt.ReceiptUrl && receipt.ReceiptUrl != "") {
            window.open(receipt.ReceiptUrl, "_system");
        }
    };
    ReceiptsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-receipts',template:/*ion-inline-start:"D:\WORKSPACE\paytival\argentumapp\src\pages\receipts\receipts.html"*/'<!--\n\n  Generated template for the ReceiptsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n <!--<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en"></script>-->\n\n\n\n<ion-header no-border>\n\n\n\n  <ion-navbar transparent>\n\n    <ion-buttons [color]="plain-white" end>\n\n      <button ion-button (click)="openSettings()">\n\n        <ion-icon name="settings" style="zoom:1.8;" ></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let receipt of receipts" no-lines round (click)="onReceiptClick(receipt)" [ngStyle]="{\'background-color\': \'transparent\'}">\n\n      <ion-card>\n\n        <ion-card-header>\n\n            <ion-card-title>\n\n              <span style="float:right" >{{(receipt.Value / 100)|currency:\'EUR\'}}</span>\n\n          </ion-card-title>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <p>{{receipt.Date|date:\'dd.MM.yy HH:mm\'}}</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\WORKSPACE\paytival\argentumapp\src\pages\receipts\receipts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_receipt_receipt__["a" /* ReceiptProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_card_id_card_id__["a" /* CardIdProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_card_id_card_id__ = __webpack_require__(42);
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
    function LoginPage(navCtrl, navParams, cardIdProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cardIdProvider = cardIdProvider;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.handleLogin = function () {
        var _this = this;
        this.cardIdProvider.getCardIdForPin(this.passcode)
            .then(function (cardId) {
            if (cardId) {
                //success!!
                console.log("LoginPage: successfully got card id");
                //remove passcode input
                _this.passcode = NaN;
                //now navigate to tabs page
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__current_current__["a" /* CurrentPage */]);
            }
            else {
                console.error("LoginPage: could not load cardId for pin: " + _this.passcode + "; cardId was null!!");
            }
        })
            .catch(function (error) {
            console.error("LoginPage: could not load cardId for pin: " + _this.passcode + "; error: " + error);
        });
    };
    LoginPage.prototype.doNavigation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__scan_scan__["a" /* ScanPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\WORKSPACE\paytival\argentumapp\src\pages\login\login.html"*/'<!--\n\n	Generated template for the LoginPage page.\n\n\n\n	See http://ionicframework.com/docs/components/#navigation for more info on\n\n	Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content>\n\n\n\n	<img src="./assets/imgs/scan_Argentum2.png" (click)="doNavigation()"/>\n\n\n\n	<div class="textor">\n\n		or\n\n	</div>\n\n\n\n<!--\n\n	<div class="textpin">\n\n		Enter your received PIN\n\n	</div>\n\n-->\n\n		<ion-item margin-top>\n\n			<ion-label floating>enter your received PIN.</ion-label>\n\n			<ion-input \n\n					type="number"\n\n					[(ngModel)] = "passcode"\n\n					(keyup.enter)="handleLogin()"\n\n					>\n\n					<!-- max length does not seem to work in chrome; need to validate on ios/android -->\n\n				</ion-input>\n\n		</ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\WORKSPACE\paytival\argentumapp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_card_id_card_id__["a" /* CardIdProvider */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__current_current__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_card_id_card_id__ = __webpack_require__(42);
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
    function ScanPage(navCtrl, navParams, qrScanner, cardIdProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.cardIdProvider = cardIdProvider;
        this.toastCtrl = toastCtrl;
        // mocking scanning because the camera can't really 
        // detect qrcodes displayed on another screen and i don't have a printer at hand
        //this.mockScan();
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
                //permission was granted
                _this.qrScanner.show();
                _this.scan();
            }
            else if (status.denied) {
                //permission denied permanently
                //user needs to allow permission in settings
                _this.qrScanner.openSettings();
            }
            else {
                //permission temporarily not granted
                //TODO: make dialog that tells user to allow permission & ask again
                _this.prepareScanner();
            }
        })
            .catch(function (e) { return console.log('Error is ' + e); });
    };
    ScanPage.prototype.scan = function () {
        var _this = this;
        var scanSub = this.qrScanner.scan()
            .subscribe(function (qrcode) {
            var text = qrcode.result;
            console.log("scanned card: " + text);
            //store scanned text
            var pin = _this.cardIdProvider.setCardId(text);
            console.log(pin);
            //navigate to next view
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__current_current__["a" /* CurrentPage */]);
            _this.qrScanner.hide();
            scanSub.unsubscribe();
        });
    };
    ScanPage.prototype.mockScan = function () {
        var pin = this.cardIdProvider.setCardId("ed163c5c-b271-4b12-976a-e776c937ff6e");
        console.log(pin);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__current_current__["a" /* CurrentPage */]);
    };
    ScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scan',template:/*ion-inline-start:"D:\WORKSPACE\paytival\argentumapp\src\pages\scan\scan.html"*/'<!--\n\n  Generated template for the ScanPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>scan</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n-->\n\n\n\n<ion-content padding style="background: none transparent;">\n\n\n\n  <img src="./assets/imgs/fadenkreuz_scan.png"/>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\WORKSPACE\paytival\argentumapp\src\pages\scan\scan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_4__providers_card_id_card_id__["a" /* CardIdProvider */],
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
		308,
		4
	],
	"../pages/login/login.module": [
		309,
		3
	],
	"../pages/receipts/receipts.module": [
		310,
		2
	],
	"../pages/scan/scan.module": [
		311,
		1
	],
	"../pages/settings/settings.module": [
		312,
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
/* unused harmony export HistoryType */
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
        //private map: Map<number, Receipt> = new Map();
        this.selectedReceipt = null;
    }
    ReceiptProvider_1 = ReceiptProvider;
    ReceiptProvider.prototype.getReceipts = function (cardId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://api.paytival.com//history/' + ReceiptProvider_1.festivalId + "/" + cardId)
                .subscribe(function (data) {
                var receipts = data;
                resolve(receipts);
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

var HistoryType;
(function (HistoryType) {
    HistoryType[HistoryType["Withdraw"] = 0] = "Withdraw";
    HistoryType[HistoryType["TopUp"] = 1] = "TopUp";
    HistoryType[HistoryType["Order"] = 2] = "Order";
})(HistoryType || (HistoryType = {}));
;
/**
 * mock receipt class
 * this will have to change quite a bit once the server communication is available
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

/***/ 166:
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
    }
    /**
     * always loads card information from server to get most up-to-date data
     */
    CardProvider.prototype.cardStatus = function (cardId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://api.paytival.com/card_information/' + cardId)
                .subscribe(function (data) {
                //don't need to parse json because this is done automatically
                var card = data;
                resolve(card);
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

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataprovider__ = __webpack_require__(307);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
__WEBPACK_IMPORTED_MODULE_2__dataprovider__["a" /* Dataprovider */].initialize();
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_qr_scanner__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_current_current__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_receipts_receipts__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_scan_scan__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_receipt_receipt__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_beverage_beverage__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_card_id_card_id__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_card_card__ = __webpack_require__(166);
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
                __WEBPACK_IMPORTED_MODULE_17__providers_beverage_beverage__["a" /* BeverageProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_card_id_card_id__["a" /* CardIdProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_card_card__["b" /* CardProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
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

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeverageProvider; });
/* unused harmony export Beverage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    Generated class for the BeverageProvider provider.

    See https://angular.io/guide/dependency-injection for more info on providers
    and Angular DI.
*/
var BeverageProvider = /** @class */ (function () {
    function BeverageProvider() {
        this.map = new Map();
    }
    BeverageProvider.prototype.getBeverage = function (id) {
        if (this.map.get(id)) {
            var beverage = this.map.get(id);
            console.log("getting in-memory beverag: " + JSON.stringify(beverage));
            return Promise.resolve(beverage);
        }
        else {
            return this.loadBeverage(id);
        }
    };
    BeverageProvider.prototype.loadBeverage = function (id) {
        //TODO: make server call here to resolve beverage id - beverage
        var beverage = Beverage.map.get(id);
        console.log("setting in-memory beverage: " + JSON.stringify(beverage));
        this.map.set(id, beverage);
        console.log("getting in-memory beverag: " + JSON.stringify(this.map.get(id)));
        return Promise.resolve(this.map.get(id));
    };
    BeverageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BeverageProvider);
    return BeverageProvider;
}());

var Beverage = /** @class */ (function () {
    function Beverage(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Beverage.map = new Map([
        [10000, new Beverage(10000, "Bier 0.5l", 350)],
        [10001, new Beverage(10001, "Bier 0.3l", 300)],
        [10002, new Beverage(10002, "Spritzer 0.5l", 350)],
        [10003, new Beverage(10003, "Spritzer 0.3l", 300)],
        [10004, new Beverage(10004, "Anti 0.5l", 300)],
        [10005, new Beverage(10005, "Anti 0.3l", 250)],
        [10006, new Beverage(10006, "Schnaps", 200)],
        [10007, new Beverage(10007, "Cocktail", 500)],
        [10008, new Beverage(10008, "Becherpfand", 100)],
        [10009, new Beverage(10009, "Becherpfand retour", -100)]
    ]);
    return Beverage;
}());

//# sourceMappingURL=beverage.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Card */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dataprovider; });
/* unused harmony export Receipt */
/* unused harmony export HistoryType */
/* unused harmony export Beverage */
var Card = /** @class */ (function () {
    function Card(id, cardId, createdAt, credit) {
        this.id = id;
        this.cardId = cardId;
        this.createdAt = createdAt;
        this.credit = credit;
    }
    return Card;
}());

var Dataprovider = /** @class */ (function () {
    function Dataprovider() {
    }
    Dataprovider.initialize = function () {
        this.wasInitialized = true;
        this.beverages = [
            new Beverage(10001, "Bier 0.5l", 350),
            new Beverage(10002, "Bier 0.3l", 300),
            new Beverage(10003, "Spritzer 0.5l", 350),
            new Beverage(10004, "Spritzer 0.3l", 300),
            new Beverage(10005, "Anti 0.5l", 300),
            new Beverage(10006, "Anti 0.3l", 250),
            new Beverage(10007, "Schnaps", 200),
            new Beverage(10008, "Cocktail", 500),
            new Beverage(10009, "Becherpfand", 100),
            new Beverage(10010, "Becherpfand retour", -100)
        ];
        this.receipts = [
            new Receipt(20001, "2018-05-02T16:37:00.000Z", 5000, HistoryType.TopUp, [], this.recipeUrl, this.cardId),
            new Receipt(20002, "2018-05-02T16:38:00.000Z", 1350, HistoryType.Order, [this.beverages[0], this.beverages[8], this.beverages[0], this.beverages[8], this.beverages[0], this.beverages[8]], this.recipeUrl, this.cardId),
            new Receipt(20003, "2018-05-02T16:39:00.000Z", 1300, HistoryType.Order, [this.beverages[2], this.beverages[8], this.beverages[2], this.beverages[8], this.beverages[1], this.beverages[8]], this.recipeUrl, this.cardId),
            new Receipt(20004, "2018-05-02T16:40:00.000Z", -200, HistoryType.Order, [this.beverages[4], this.beverages[8], this.beverages[9], this.beverages[9], this.beverages[9], this.beverages[9], this.beverages[9], this.beverages[9]], this.recipeUrl, this.cardId),
            new Receipt(20005, "2018-05-02T16:42:00.000Z", 350, HistoryType.Order, [this.beverages[0], this.beverages[8], this.beverages[9]], this.recipeUrl, this.cardId),
            new Receipt(20006, "2018-05-02T16:45:00.000Z", 350, HistoryType.Order, [this.beverages[0], this.beverages[8], this.beverages[9]], this.recipeUrl, this.cardId),
            new Receipt(20007, "2018-05-02T16:46:00.000Z", -100, HistoryType.Order, [this.beverages[9]], this.recipeUrl, this.cardId),
            new Receipt(20008, "2018-05-02T16:57:00.000Z", 1950, HistoryType.Withdraw, [], this.recipeUrl, this.cardId)
        ];
    };
    Dataprovider.recipeUrl = "this is where the url goes";
    Dataprovider.cardId = "0123456789abcdef";
    Dataprovider.card = new Card(4905138401574912, "ed163c5c-b271-4b12-976a-e776c937ff6e", "2018-02-15T19:22:00.999335Z", 0);
    Dataprovider.wasInitialized = false;
    return Dataprovider;
}());

var Receipt = /** @class */ (function () {
    function Receipt(id, date, value, histType, beverages, receiptUrl, cardId) {
        this.id = id;
        this.date = date;
        this.value = value;
        this.histType = histType;
        this.beverages = beverages;
        this.receiptUrl = receiptUrl;
        this.cardId = cardId;
    }
    return Receipt;
}());

var HistoryType;
(function (HistoryType) {
    HistoryType[HistoryType["Withdraw"] = 0] = "Withdraw";
    HistoryType[HistoryType["TopUp"] = 1] = "TopUp";
    HistoryType[HistoryType["Order"] = 2] = "Order";
})(HistoryType || (HistoryType = {}));
;
var Beverage = /** @class */ (function () {
    function Beverage(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Beverage;
}());

//# sourceMappingURL=dataprovider.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardIdProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(165);
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
  Generated class for the CardIdProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CardIdProvider = /** @class */ (function () {
    function CardIdProvider(storage) {
        this.storage = storage;
        this._cardId = null;
        this._pin = -1;
        this.loadCardId = function (pin) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                return _this.storage.get(pin.toString())
                    .then(function (cardId) {
                    if (cardId) {
                        _this._cardId = cardId;
                        _this._pin = pin;
                        resolve(_this._cardId);
                    }
                    else {
                        reject();
                    }
                });
            });
        };
    }
    CardIdProvider_1 = CardIdProvider;
    /**
     * very simple pin calculation algorithm
     * adds up the character codes for all characters in string
     * returns the last 4 digits of the sum
     */
    CardIdProvider.calculatePin = function (cardId) {
        var pin = 0;
        for (var index = 0; index < cardId.length; index++) {
            var increment = cardId.charCodeAt(index) * index;
            if (increment != NaN) {
                pin += increment;
            }
        }
        pin = pin % 10000;
        console.log("pin: " + pin);
        return pin;
    };
    Object.defineProperty(CardIdProvider.prototype, "cardId", {
        /*
         * gets in-memory card ID
         * if card id has not been loaded or is for some other reason unavailable
         * --> call getCardIdForPin with the valid pin OR
         * --> call setCardId
         */
        get: function () {
            return this._cardId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardIdProvider.prototype, "pin", {
        get: function () {
            return this._pin;
        },
        enumerable: true,
        configurable: true
    });
    /*
     * loads the card id associated with the pin
     * returns a promise that will resolve the card id
     * promise is rejected if the pin is not valid
     */
    CardIdProvider.prototype.getCardIdForPin = function (pin) {
        return this.loadCardId(pin);
    };
    CardIdProvider.prototype.setCardId = function (cardId) {
        this._cardId = cardId;
        this._pin = CardIdProvider_1.calculatePin(cardId);
        this.storeCardId(this._pin, this._cardId);
        return this._pin;
    };
    CardIdProvider.prototype.storeCardId = function (pin, cardId) {
        this.storage.clear(); //evil!! this deletes the whole local storage
        this.storage.set(pin.toString(), cardId);
    };
    CardIdProvider = CardIdProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], CardIdProvider);
    return CardIdProvider;
    var CardIdProvider_1;
}());

//# sourceMappingURL=card-id.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__receipts_receipts__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_card_id_card_id__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_card_card__ = __webpack_require__(166);
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
    function CurrentPage(navCtrl, navParams, cardIdProvider, cardProvider, zone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cardIdProvider = cardIdProvider;
        this.cardProvider = cardProvider;
        this.zone = zone;
        this.myCard = __WEBPACK_IMPORTED_MODULE_5__providers_card_card__["a" /* Card */].EMPTY_CARD;
        cardProvider.cardStatus(cardIdProvider.cardId)
            .then(function (card) {
            console.log("CurrentPage: successfully loaded CARD");
            _this.zone.run(function () {
                _this.myCard = card;
            });
        })
            .catch(function (error) {
            console.error("CurrentPage: tried to get card, caught: " + error);
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
            __WEBPACK_IMPORTED_MODULE_4__providers_card_id_card_id__["a" /* CardIdProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_card_card__["b" /* CardProvider */],
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

},[217]);
//# sourceMappingURL=main.js.map