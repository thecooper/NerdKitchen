import { Nutrition } from '@app/features/recipe/nutrition';
import { IngredientCategory } from './ingredient-category'

export class Ingredient {
	Quantity?:number;
	Name:string;
	UnitOfMeasure:string;
	Nutrition:Nutrition;
	Tags:string[];
	Category:IngredientCategory;

	constructor() {
		this.Quantity = null;
		this.Name = "";
		this.UnitOfMeasure = "";
		this.Nutrition = new Nutrition();
		this.Tags = [];
	}
}