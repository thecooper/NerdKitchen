import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, OnInit } from '@angular/core'
import { Ingredient } from '../ingredient'
import { IngredientCategory } from '../ingredient-category'

@Component({
	selector:'Ingredient',
	styleUrls:['./ingredient.component.scss'],
	templateUrl:'./ingredient.component.html'
})
export class IngredientComponent implements OnInit {
	private _snapshot : Ingredient;
	
	@Input() value:Ingredient;

	@Input() CanEdit : boolean = true;

	@Output("Save") SaveIngredient = new EventEmitter<Ingredient>();
	@Output("Cancel") CancelIngredient = new EventEmitter<Ingredient>();
	@Output("Delete") DeleteIngredient = new EventEmitter<Ingredient>();

	@ViewChild('ingredientForm') form : ElementRef;

	private edit : boolean = false;

	private CategoryValues = IngredientCategory;

	ngOnInit() {
		if(this.value.Quantity == null || this.value.UnitOfMeasure == "" || this.value.Name == "") {
			this.Edit();
		} else {
			this.edit = false;
		}
	}

	Edit() {
		console.log("generating snapshot");
		this._snapshot = { ...this.value };
		this.edit = true;
	}

	Save() {
		console.log("Saving button");
		this.edit = false;
	}

	Cancel() {
		this.edit = false;
		this.value = this._snapshot;
		this.CancelIngredient.emit(this.value);
	}

	Delete() {
		this.DeleteIngredient.emit(this.value);
	}

	GetCategoryName(category:IngredientCategory) {
		return IngredientCategory[category];
	}
}