import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Ingredient } from '../ingredient'
import { IngredientCategory } from '../ingredient-category'

@Component({
	selector:'[Ingredient]',
	inputs:['Ingredient'],
	outputs:['UpdateIngredient', 'DeleteIngredient'],
	styleUrls:[],
	templateUrl:'./ingredient.html'
})
export class IngredientComponent {
	@Input() Ingredient:Ingredient;
	@Output() UpdateIngredient = new EventEmitter<Ingredient>();
	@Output() DeleteIngredient = new EventEmitter<Ingredient>();

	Edit:Boolean;

	ngOnInit() {
		if(this.Ingredient.Quantity == null || this.Ingredient.Name == null || this.Ingredient.Name == "") {
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