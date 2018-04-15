import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { Recipe } from '../recipe'
import { Ingredient } from '@app/features/ingredient/ingredient';
import { RecipeService } from '@services'
import { ActivatedRoute } from '@angular/router';

@Component({
	selector:'recipe',
	templateUrl:`./recipe.template.html`,
	styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
	private capturedRecipeName : string = "";
	private recipe : Recipe;
	
	constructor(private recipeService:RecipeService, private activatedRoute : ActivatedRoute) {}

	ngOnInit() {
		let recipeId = this.activatedRoute.snapshot.params["id"];
		
		this.recipeService.get(recipeId)
			.subscribe(recipe => this.recipe = recipe);
	}
}