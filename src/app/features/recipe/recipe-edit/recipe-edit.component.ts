import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Recipe } from '../recipe'
import { Ingredient } from '@app/features/ingredient/ingredient';
import { RecipeService } from '@services'

@Component({
	selector:'recipe',
	templateUrl:`./recipe-edit.template.html`,
	styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent {
	@Input() Recipe:Recipe;
	Editing:boolean = false;
	@Output() Deleted = new EventEmitter<Recipe>();

	constructor(private recipeService:RecipeService) {
		
	}

	SaveRecipe() {
		this.recipeService.save(this.Recipe)
			.subscribe(res => {
				this.Editing = false;
			});
	}

	CancelEdit() {
		this.Editing = false;
	}

	EnableEdit() {
		this.Editing = true;
	}

	AddIngredient() {
		this.Recipe.Ingredients.push(new Ingredient());
	}

	UpdateIngredient(ingredient:Ingredient) {
		// this.Recipe.AddIngredient(ingredient);
	}

	DeleteRecipe() {
		if(this.Recipe.Id != null) {
			this.recipeService.delete(this.Recipe).subscribe(result => {
				if(result.ok) {
					this.Deleted.emit(this.Recipe);
				} else {
					// TODO: Error Handling
				}
			});
		} else {
			this.Deleted.emit(this.Recipe);
		}
	}

	IngredientDeleted($deletedIngredient:Ingredient) {
		this.Recipe.Ingredients = this.Recipe.Ingredients.filter((ingredient, index, all) => {
			return ingredient != $deletedIngredient;
		});
	}
}