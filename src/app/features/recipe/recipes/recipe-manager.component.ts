import { Component } from '@angular/core'
import { Recipe } from '../recipe'
import { RecipeService } from '@services'
import { Router } from '@angular/router';

@Component({
	selector:'recipe-manager',
	templateUrl:'./recipe-manager.component.html',
	styleUrls: ['./recipe-manager.component.scss'],
	providers:[RecipeService]
})
export class RecipesComponent {
	recipes:Recipe[]

	constructor(private recipeService:RecipeService, private router:Router) {
		
	}

	ngOnInit() {
		this.recipeService.all()
			.subscribe(recipes => {
				// console.log(recipes);
				this.recipes = recipes;
			});
	}

	CreateNewRecipe() {
		this.recipes.unshift(new Recipe());
	}

	RecipeUpdated(recipe:Recipe) {
		this.recipes = this.recipes.filter((r, index, all) => {
			return r != recipe;
		});
	}

	viewRecipe(id:number) {
		console.log("Id: ", id);
		this.router.navigate(["recipes", id]);
	}
}