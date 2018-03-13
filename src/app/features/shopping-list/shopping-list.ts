import { Ingredient } from '@app/features/ingredient/ingredient'

export class ShoppingList {
	Id:string;
	Revision:string;
	ShoppingDate:Date;
	Items:Ingredient[];
}