import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
	Generated class for the ReceiptProvider provider.

	See https://angular.io/guide/dependency-injection for more info on providers
	and Angular DI.
*/
@Injectable()
export class ReceiptProvider {

	public selectedReceipt: Receipt = null;
	private static festivalId: number = 5754258133614592;

	constructor(public http: HttpClient) {}

	public getReceipts(cardId: string): Promise<Receipt[]>{
		return new Promise((resolve, reject) => {
			this.http.get('https://api.paytival.com//history/' + ReceiptProvider.festivalId + "/" + cardId)
				.subscribe((data) => {
					let receipts: Receipt[] = data as Receipt[];

					resolve(receipts);
				}, (error) => {
					reject();
				});
			});
	}
}

/**
 * bean
 */
export class Receipt {

	private constructor(
		public Value: number,
		public Type: number,
		public ReceiptUrl: string,
		public CardID: string,
		public FestivalID: string,
		public Date: string,
		public Beverages: any
		){}
}
