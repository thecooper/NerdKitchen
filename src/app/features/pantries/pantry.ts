import { Ingredient } from '@app/features/ingredient/ingredient'

export class Pantry {
	Id:string;
	Revision:string;
	Name:string = "";
	Ingredients:Ingredient[];
	
	constructor() {
		this.Ingredients = [];
	}
}