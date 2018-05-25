import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the CardIdProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardIdProvider {

	/**
	 * very simple pin calculation algorithm
	 * adds up the character codes for all characters in string
	 * returns the last 4 digits of the sum
	 */
	private static calculatePin(cardId: string): number {
		var pin = 0;
		for(var index = 0; index < cardId.length; index++){
			let increment = cardId.charCodeAt(index) * index;
			if(increment != NaN){
				pin += increment;
			}
		}
		pin = pin % 10000;
		console.log("pin: " + pin);
		return pin;
	}

	private _cardId: string = null;
	private _pin: number = -1;

	constructor(private storage: Storage) {}


	/*
	 * gets in-memory card ID
	 * if card id has not been loaded or is for some other reason unavailable
	 * --> call getCardIdForPin with the valid pin OR
	 * --> call setCardId
	 */
	public get cardId(): string{
		return this._cardId;
	}

	public get pin(): number {
		return this._pin;
	}

	/*
	 * loads the card id associated with the pin
	 * returns a promise that will resolve the card id
	 * promise is rejected if the pin is not valid 
	 */
	public getCardIdForPin(pin: number): Promise<string>{
		return this.loadCardId(pin);
	}

	public setCardId(cardId: string): number{
		this._cardId = cardId;
		this._pin = CardIdProvider.calculatePin(cardId);

		this.storeCardId(this._pin, this._cardId);

		return this._pin;
	}

	private storeCardId(pin: number, cardId: string): void{
		this.storage.clear(); //evil!! this deletes the whole local storage
		this.storage.set(pin.toString(), cardId);
	}

	private loadCardId = function(pin: number): Promise<string>{
		return new Promise((resolve, reject) => {
			return this.storage.get(pin.toString())
			.then((cardId) =>  {
				if(cardId){
					this._cardId = cardId;
					this._pin = pin;
					resolve(this._cardId);
				} else {
					reject();
				}	
			});
		})
		
	}
}