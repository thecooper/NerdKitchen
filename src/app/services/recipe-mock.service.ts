import { Injectable } from '@angular/core'
import { Http,Response } from '@angular/http'

import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of';

import { Recipe } from '@app/features/recipe/recipe'
import { Ingredient } from '@app/features/ingredient/ingredient'
import { IngredientCategory } from '@app/features/ingredient/ingredient-category'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RecipeService {
	recipeStore : Recipe[] = [
			{
				Id:"1",
				Revision:"1",
				Name:"Pork Chops",
				Servings:4,
				Ingredients:[
					{
						Quantity:1,
						Name:"Pork Shoulder",
						UnitOfMeasure:"lbs",
						Nutrition:null,
						Tags:[],
						Category:IngredientCategory.Meat,
					}
				],
				TotalNutrition:null,
				ImageUrl:"https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1365/gallery-1503418779-pork-chops-delish.jpg?resize=768:*"
			},
			{
				Id:"2",
				Revision:"1",
				Name:"Tortillas",
				Servings:3,
				Ingredients:[],
				TotalNutrition:null,
				ImageUrl:"https://gregfly.com/wp-content/uploads/2015/04/homemade-soft-tacos-with-Einkorn-flour-tortillas.jpg"
			},
			{
				Id:"3",
				Revision:"2",
				Name:"Meatball Marinara",
				Servings:16,
				Ingredients:[],
				TotalNutrition:null,
				ImageUrl:"https://media4.s-nbcnews.com/i/newscms/2015_51/902591/raos_meatballs-rao-today-151216-tease_61f42434a9b5fac13d671cc08a4e798b.jpg"
			}
		];

	constructor() { }

	all() : Observable<Recipe[]> {
		return new BehaviorSubject<Recipe[]>(this.recipeStore);
	}

	get(id:string) : Observable<Recipe> {
		return new BehaviorSubject<Recipe>(this.recipeStore.find((val, index) => { return val.Id === id; }))
	}

	save(recipe:Recipe) : Observable<boolean> {
		let matchedRecipe = this.recipeStore.find((r:Recipe) => r.Id === recipe.Id);

		if(matchedRecipe) {
			let recipeIndex = this.recipeStore.indexOf(matchedRecipe);
			this.recipeStore[recipeIndex] = recipe;
		} else {
			let nextId : number = +this.recipeStore.reduce((prevVal:number, currVal:Recipe, currIndex:number, origArr:Recipe[]) => {
				return (+currVal.Id > prevVal) ? currVal : prevVal;
			}, 0) + 1;

			recipe.Id = nextId.toString();
			this.recipeStore.push(recipe);
		}
		return Observable.of(true);
	}

	delete(recipe:Recipe) : Observable<boolean> {
		return Observable.of(true);
	}
}