import { Ingredient } from '@app/features/ingredient/ingredient'
import { Nutrition } from './nutrition'
 
export class Recipe {
	Id?:string;
	Revision?:string;
	Name:string;
	Servings:number;
	Ingredients:Ingredient[];
	TotalNutrition:Nutrition;

	constructor() {
		this.Id = null;
		this.Revision = null;
		this.Name = "";
		this.Servings = 0;
		this.Ingredients = [];
		this.TotalNutrition = new Nutrition();
	}

	// UpdateNutrition() {
	// 	var totalCalories = 0;
	// 	var totalFat = 0;
	// 	var totalCarbs = 0;
	// 	var totalProtein = 0;

	// 	for(var i = 0; i < this.Ingredients.length; i++) {
	// 		var nutrition = this.Ingredients[i].Nutrition;

	// 		totalFat += nutrition.Fat;
	// 		totalCarbs += nutrition.Carbohydrates;
	// 		totalProtein += nutrition.Protein;
	// 	}

	// 	totalCalories = (totalFat * 9) + (totalCarbs * 4) + (totalProtein * 4);

	// 	this.TotalNutrition.Protein = totalProtein;
	// 	this.TotalNutrition.Fat = totalFat;
	// 	this.TotalNutrition.Carbohydrates = totalCarbs;
	// 	this.TotalNutrition.Calories = totalCalories;
	// }

	// AddIngredient(ingredient:Ingredient = null) {
	// 	if(ingredient == null) {
	// 		this.Ingredients.push(new Ingredient());
	// 	} else {
	// 		let index = this.Ingredients.indexOf(ingredient);
	// 		if(index !== -1) {
	// 			this.Ingredients[index] = ingredient;
	// 		} else {
	// 			this.Ingredients.push(ingredient);
	// 		}
	// 	}	
	// }
}