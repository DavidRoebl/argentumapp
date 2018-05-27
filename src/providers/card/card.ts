import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
	Generated class for the CardProvider provider.

	See https://angular.io/guide/dependency-injection for more info on providers
	and Angular DI.
*/
@Injectable()
export class CardProvider {

	private _cardId: string = null;

	constructor(public http: HttpClient) {}

	public set cardId(cardId: string){
		this._cardId = cardId;
	}

	public get cardId(): string{
		return this._cardId;
	}

	/**
	 * always loads card information from server to get most up-to-date data
	 */
	public cardStatus(): Promise<Card> {
		return new Promise((resolve, reject) => {
			this.http.get('https://api.paytival.com/card_information/' + this._cardId)
				.subscribe((data) => {
					//don't need to parse json because this is done automatically
					let card = data as Card;
					resolve(card);
				}, (error) => {
					reject();
				});
			});
	}	
}

export class Card {
	public static EMPTY_CARD = new Card("", "", "", 0);

	constructor(public ID: string, 
		public CardID: string, 
		public CreatedAt: string, 
		public Credit: number){}
}
