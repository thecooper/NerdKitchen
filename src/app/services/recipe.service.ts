import { Injectable } from '@angular/core'
import { Http,Response } from '@angular/http'

import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

import { Recipe } from '@app/features/recipe/recipe'

@Injectable()
export class RecipeService {

	constructor(private http:Http) {

	}

	all() {
		return this.http.get("http://localhost:5984/recipes/_all_docs?include_docs=true",{})
			.map((res:Response) => res.json())
			.map((serverJson:any) => {
				let recipeArray:Recipe[] = [];
				for(var i = 0; i < serverJson["rows"].length; i++) {
					if(serverJson["rows"][i].doc) {
						let newRecipe : Recipe = serverJson["rows"][i].doc;
						recipeArray.push(newRecipe);
					}
				}
				return recipeArray;
			});
	}

	get(id:number) {
		return this.http.get(`http://localhost:5984/recipes/${id}`, {})
			.map((res:Response) => res.json());
	}

	save(recipe:Recipe) {
		let options = {data:recipe};
		if(recipe.Id == null) {
			return this.http.post("http://localhost:5984/recipes/", options);
		} else {
			return this.http.put(`http://localhost:5984/recipes/${recipe.Id}?rev=${recipe.Revision}`, options);
		}
	}

	delete(recipe:Recipe) {
		return this.http.delete(`http://localhost:5984/recipes/${recipe.Id}?rev=${recipe.Revision}`);
	}
}