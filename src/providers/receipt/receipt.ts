import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
	Generated class for the ReceiptProvider provider.

	See https://angular.io/guide/dependency-injection for more info on providers
	and Angular DI.
*/
@Injectable()
export class ReceiptProvider {

	//private map: Map<number, Receipt> = new Map();

	public selectedReceipt: Receipt = null;

	constructor(public http: HttpClient) {}

	public getReceipts(festivalId: number, cardId: string): Promise<Receipt[]>{
		//TODO: get from server
		return new Promise((resolve, reject) => {
			if(festivalId && cardId){
				resolve(Receipt.receipts);
			} else {
				reject();
			}
		});
	}
}

export enum HistoryType{
	"Withdraw",
	"TopUp",
	"Order" 	
};

/**
 * mock receipt class
 * this will have to change quite a bit once the server communication is available
 */
export class Receipt {

	private static url = "https://drive.google.com/open?id=1sn_9BbybNq63DOCp0weklFBlcEakcg1_";
	private static cardId = "ed163c5c-b271-4b12-976a-e776c937ff6e";
	

	static receipts: Receipt[] = [
		new Receipt(20001, "2018-05-02T16:37:00.000Z", 5000, HistoryType.TopUp,    [],                                                       Receipt.url, Receipt.cardId),
		new Receipt(20002, "2018-05-02T16:38:00.000Z", 1350, HistoryType.Order,    [10000, 10008, 10000, 10008, 10000, 10008],               Receipt.url, Receipt.cardId),
		new Receipt(20003, "2018-05-02T16:39:00.000Z", 1300, HistoryType.Order,    [10002, 10008, 10002, 10008, 10001, 10008],               Receipt.url, Receipt.cardId),
		new Receipt(20004, "2018-05-02T16:40:00.000Z", -200, HistoryType.Order,    [10004, 10008, 10009, 10009, 10009, 10009, 10009, 10009], Receipt.url, Receipt.cardId),
		new Receipt(20005, "2018-05-02T16:42:00.000Z",  350, HistoryType.Order,    [10000, 10008, 10009],                                    Receipt.url, Receipt.cardId),
		new Receipt(20006, "2018-05-02T16:45:00.000Z",  350, HistoryType.Order,    [10000, 10008, 10009],                                    Receipt.url, Receipt.cardId),
		new Receipt(20007, "2018-05-02T16:46:00.000Z", -100, HistoryType.Order,    [10009],                                                  Receipt.url, Receipt.cardId),
		new Receipt(20008, "2018-05-02T16:57:00.000Z", 1950, HistoryType.Withdraw, [],                                                       Receipt.url, Receipt.cardId)
	];

	private constructor(public id: number, 
		public date: string, public value: number, 
		public histType: HistoryType, public beverages: number[], 
		public receiptUrl: string, public cardId: string){

	}
}
