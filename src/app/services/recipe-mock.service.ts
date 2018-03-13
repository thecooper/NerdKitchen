import { Injectable } from '@angular/core'
import { Http,Response } from '@angular/http'

import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of';

import { Recipe } from '@app/features/recipe/recipe'

@Injectable()
export class RecipeService {
	recipeStore : Recipe[] = [
			{
				Id:"1",
				Revision:"1",
				Name:"Pork Chops",
				Servings:4,
				Ingredients:[],
				TotalNutrition:null,
			},
			{
				Id:"2",
				Revision:"1",
				Name:"Tortillas",
				Servings:3,
				Ingredients:[],
				TotalNutrition:null,
			},
			{
				Id:"3",
				Revision:"2",
				Name:"Meatball Marinara",
				Servings:16,
				Ingredients:[],
				TotalNutrition:null,
			}
		];

	constructor(private http:Http) { }

	all() : Observable<Recipe[]> {
		return Observable.of(this.recipeStore);
	}

	get(id:string) : Observable<Recipe> {
		return Observable.of(this.recipeStore.find((val, index) => { return val.Id === id; }))
	}

	save(recipe:Recipe) : Observable<boolean> {
		return Observable.of(true);
	}

	delete(recipe:Recipe) : Observable<boolean> {
		return Observable.of(true);
	}
}