export class Card {
	constructor(public id: number, public cardId: string, public createdAt: string, public credit: number){

	}
}

export class Dataprovider {
	public static receipts: any;
	private static beverages: any;

	private static recipeUrl = "this is where the url goes";
	private static cardId = "0123456789abcdef";
	public static card = new Card(4905138401574912, "ed163c5c-b271-4b12-976a-e776c937ff6e", "2018-02-15T19:22:00.999335Z", 0);

	public static wasInitialized = false;

	static initialize(){

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
			new Receipt(20001, "2018-05-02T16:37:00.000Z", 5000, HistoryType.TopUp, [], this.recipeUrl, this.cardId), //top up 100 €
			new Receipt(20002, "2018-05-02T16:38:00.000Z", 1350, HistoryType.Order, [this.beverages[0], this.beverages[8], this.beverages[0], this.beverages[8], this.beverages[0], this.beverages[8]], this.recipeUrl, this.cardId),
			new Receipt(20003, "2018-05-02T16:39:00.000Z", 1300, HistoryType.Order, [this.beverages[2], this.beverages[8], this.beverages[2], this.beverages[8], this.beverages[1], this.beverages[8]], this.recipeUrl, this.cardId),
			new Receipt(20004, "2018-05-02T16:40:00.000Z", -200, HistoryType.Order, [this.beverages[4], this.beverages[8], this.beverages[9], this.beverages[9], this.beverages[9], this.beverages[9], this.beverages[9], this.beverages[9]], this.recipeUrl, this.cardId),
			new Receipt(20005, "2018-05-02T16:42:00.000Z", 350, HistoryType.Order, [this.beverages[0], this.beverages[8], this.beverages[9]], this.recipeUrl, this.cardId),
			new Receipt(20006, "2018-05-02T16:45:00.000Z", 350, HistoryType.Order, [this.beverages[0], this.beverages[8], this.beverages[9]], this.recipeUrl, this.cardId),
			new Receipt(20007, "2018-05-02T16:46:00.000Z", -100, HistoryType.Order, [this.beverages[9]], this.recipeUrl, this.cardId),
			new Receipt(20008, "2018-05-02T16:57:00.000Z", 1950, HistoryType.Withdraw, [], this.recipeUrl, this.cardId)
		];

	}

	constructor (){}
}



export class Receipt {

	constructor(public id: number, 
		public date: string, public value: number, 
		public histType: HistoryType, public beverages: Beverage[], 
		public receiptUrl: string, public cardId: string){

	}
}

export enum HistoryType{
	"Withdraw",
	"TopUp",
	"Order" 	
};

export class Beverage{
	constructor(public id: number, public name: string, public price: number){

	}
}