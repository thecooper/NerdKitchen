import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Ingredient } from '../ingredient'
import { IngredientCategory } from '../ingredient-category'

@Component({
	selector:'[Ingredient]',
	styleUrls:[],
	templateUrl:'./ingredient.html'
})
export class IngredientComponent {
	@Input() Ingredient:Ingredient;
	@Output() UpdateIngredient = new EventEmitter<Ingredient>();
	@Output() DeleteIngredient = new EventEmitter<Ingredient>();

	Edit:Boolean;

	ngOnInit() {
		console.log(this.Ingredient);
		if(this.Ingredient.Quantity == null && this.Ingredient.UnitOfMeasure == "" && this.Ingredient.Name == "") {
			console.log("Editing the ingredient!");
			this.Edit = true;
		} else {
			this.Edit = false;
		}
	}

	ToggleEdit() {
		this.Edit = !this.Edit;
	}

	Delete() {
		this.DeleteIngredient.emit(this.Ingredient);
	}

	GetCategoryName(category:IngredientCategory) {
		return IngredientCategory[category];
	}
}