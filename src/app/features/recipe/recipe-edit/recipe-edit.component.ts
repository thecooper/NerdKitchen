import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { Recipe } from '../recipe'
import { Ingredient } from '@app/features/ingredient/ingredient';
import { RecipeService } from '@services'

@Component({
	selector:'recipe',
	templateUrl:`./recipe-edit.template.html`,
	styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
	private capturedRecipeName : string = "";
	Editing:boolean = false;

	@Input("value") recipe : Recipe;

	@Output() Deleted = new EventEmitter<Recipe>();

	constructor(private recipeService:RecipeService) {}

	ngOnInit() {
		if(!this.recipe.Id){
			this.Editing = true;
		}
	}

	SaveRecipe() {
		this.recipeService.save(this.recipe)
			.subscribe(res => {
				this.Editing = false;
			});
	}

	CancelEdit() {
		this.Editing = false;
		this.recipe.Ingredients = this.recipe.Ingredients.filter(ingredient => { 
			return !this.IngredientIsBlank(ingredient);
		});
		this.recipe.Name = this.capturedRecipeName;
	}

	EnableEdit() {
		this.Editing = true;
		this.capturedRecipeName = this.recipe.Name;
	}

	AddIngredient() {
		this.recipe.Ingredients.push(new Ingredient());
	}

	CancelIngredient(ingredient:Ingredient) {
		if(this.IngredientIsBlank(ingredient)) {
			console.log(this.recipe.Ingredients);
			let ingredientIndex = this.recipe.Ingredients.indexOf(ingredient);
			console.log(ingredientIndex);
			if(ingredientIndex != -1) {
				this.recipe.Ingredients.splice(ingredientIndex, 1);
			}
		}
	}

	DeleteRecipe() {
		if(window.confirm("Are you sure you want to delete this recipe?")){
			if(this.recipe.Id != null) {
				this.recipeService.delete(this.recipe).subscribe(result => {
					if(result) {
						this.Deleted.emit(this.recipe);
					} else {
						// TODO: Error Handling
					}
				});
			} else {
				this.Deleted.emit(this.recipe);
			}
		}
	}

	IngredientDeleted($deletedIngredient:Ingredient) {
		this.recipe.Ingredients = this.recipe.Ingredients.filter((ingredient, index, all) => {
			return ingredient != $deletedIngredient;
		});
	}

	private IngredientIsBlank(ingredient : Ingredient) : boolean {
		let ingredientIsBlank = (!ingredient.Quantity && ingredient.UnitOfMeasure === "" && ingredient.Name === "");
		return ingredientIsBlank;
	}
}