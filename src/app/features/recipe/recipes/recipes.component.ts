import { Component } from '@angular/core'
import { Recipe } from '../recipe'
import { RecipeService } from '@services'

@Component({
	selector:'recipe-manager',
	templateUrl:'./recipes.component.html',
	providers:[RecipeService]
})
export class RecipesComponent {
	recipes:Recipe[]

	constructor(private recipeService:RecipeService) {
		
	}

	ngOnInit() {
		this.recipeService.all()
			.subscribe(recipes => {
				// console.log(recipes);
				this.recipes = recipes;
			});
	}

	CreateNewRecipe() {
		this.recipes.push(new Recipe());
	}

	RecipeUpdated(recipe:Recipe) {
		this.recipes = this.recipes.filter((r, index, all) => {
			return r != recipe;
		});
	}
}