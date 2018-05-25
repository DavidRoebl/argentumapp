import { Injectable } from '@angular/core';

/*
	Generated class for the PastFestivalProvider provider.

	See https://angular.io/guide/dependency-injection for more info on providers
	and Angular DI.
*/
@Injectable()
export class FestivalProvider {

	constructor() {}

	public getCurrentFestival(cardId: string): Promise<Festival> {
		//get current festival
		//TODO: get from server
		// as this is not implemented as of yet and probably won't be implemented soon
		// this will just return mock data

		return new Promise((resolve, reject) => {
			if(null == cardId){
				reject();
			} else {
				resolve(Festival.currentFestival);
			}
		});
	}

	public getPastFestivals(cardId: string): Promise<Festival[]> {
		//get festivals for card
		//todo: get from server
		// as this is not implemented as of yet and probably won't be implemented soon
		// this will just return mock data

		if(null == cardId){
			return new Promise(reject =>{
				return "card id was null";
			});
		}

		return new Promise((resolve, reject) => {
			if(null == cardId){
				reject();
			} else {
				resolve(Array.from(Festival.pastMap.values()));	
			}
		});
	}

	public getFutureFestivals(): Promise<Festival[]>{
		//load all future festivals
		//todo: get from server
		// as this is not implemented as of yet and probably won't be implemented soon
		// this will just return mock data

		return new Promise(resolve => {
			resolve(Array.from(Festival.futureMap.values()));
		});
	}
}

export class Festival {

	public static EMPTY_FESTIVAL: Festival = new Festival(-1, "empty", "nowhere", null, new Date("1970-01-01T00:00:00.000Z"), -1);

	static pastMap: Map<number, Festival> = new Map([
		[3, new Festival(3, "Boatmania",      "Steyr",     "https://www.facebook.com/boatmaniaFHSteyr/",        new Date("2018-05-25T13:00:00.000Z"), 3570)],
		[2, new Festival(2, "ÖH Werwolf",     "Hagenberg", "https://www.facebook.com/events/1807937506177001/", new Date("2018-05-24T20:00:00.000Z"), 870)],
		[1, new Festival(1, "Wallstreet FKF", "Hagenberg", "https://www.facebook.com/events/447616282347440/",  new Date("2018-05-17T21:00:00.000Z"), 4020)],
		[0, new Festival(0, "Pubquiz",        "Hagenberg", "https://www.facebook.com/events/417850472008206/",  new Date("2018-04-25T19:00:00.000Z"), 1730)]
	]);
	static futureMap: Map<number, Festival> = new Map([
		[4, new Festival(4, "Bierkistenrennen",  "Hagenberg",   "https://www.facebook.com/events/436102806770290/", new Date("2018-06-12T16:00:00.000Z"), 0)],
		[5, new Festival(5, "Nova Rock",         "Nickelsdorf", "https://www.facebook.com/novarock/",               new Date("2018-06-14T00:00:00.000Z"), 0)],
		[6, new Festival(6, "Welser Sommerfest", "Wels",        null,                                               new Date("2018-06-14T16:00:00.000Z"), 0)],
		[7, new Festival(7, "Charity Run",       "Hagenberg",   null,                                               new Date("2018-06-15T10:00:00.000Z"), 0)],
		[8, new Festival(8, "Frequency",         "St. Pölten",  "https://www.facebook.com/events/109999606360132/", new Date("2018-08-16T12:00:00.000Z"), 0)]
	]);
	static currentFestival: Festival = 
		new Festival(57542581336145920, "IF Sommerfest", "Hagenberg", "https://www.facebook.com/events/357551741418300/", new Date("2018-05-30T16:00:00.000Z"), 5390);

	constructor(public id: number,
		public name: string,
		public location: string,
		public facebookUrl: string,
		public date: Date,
		public moneySpent: number){}
}