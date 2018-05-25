import { Injectable } from '@angular/core';

/*
	Generated class for the BeverageProvider provider.

	See https://angular.io/guide/dependency-injection for more info on providers
	and Angular DI.
*/
@Injectable()
export class BeverageProvider {

	private map: Map<number, Beverage> = new Map();

	constructor() {}

	public getBeverage(id: number): Promise<Beverage>{
	if(this.map.get(id)){
			let beverage = this.map.get(id);
			console.log("getting in-memory beverag: " + JSON.stringify(beverage));
			return Promise.resolve(beverage)
		} else {
			return this.loadBeverage(id);
		}
	}

	private loadBeverage(id: number): Promise<Beverage> {
		//TODO: make server call here to resolve beverage id - beverage
		let beverage = Beverage.map.get(id);

		console.log("setting in-memory beverage: " + JSON.stringify(beverage));
		this.map.set(id, beverage);
		console.log("getting in-memory beverag: " + JSON.stringify(this.map.get(id)));
		return Promise.resolve(this.map.get(id));
	}

}

export class Beverage{

	static map: Map<number, Beverage> = new Map([
		[10000, new Beverage(10000, "Bier 0.5l", 350)],
		[10001,	new Beverage(10001, "Bier 0.3l", 300)],
		[10002, new Beverage(10002, "Spritzer 0.5l", 350)],
		[10003, new Beverage(10003, "Spritzer 0.3l", 300)],
		[10004, new Beverage(10004, "Anti 0.5l", 300)],
		[10005, new Beverage(10005, "Anti 0.3l", 250)],
		[10006, new Beverage(10006, "Schnaps", 200)],
		[10007, new Beverage(10007, "Cocktail", 500)],
		[10008, new Beverage(10008, "Becherpfand", 100)],
		[10009, new Beverage(10009, "Becherpfand retour", -100)]
	]);


	private constructor(public id: number, public name: string, public price: number){}
}