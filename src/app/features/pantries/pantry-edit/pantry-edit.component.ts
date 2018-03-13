import { Component, Input } from '@angular/core'
import { Pantry } from '../pantry'
import { Ingredient } from '@app/features/ingredient/ingredient'
import { PantryService } from '@services'

@Component({
	selector:'storage',
	templateUrl:'./pantry-edit.component.html'
})
export class PantryEditComponent {
	@Input() Area:Pantry;

	showIngredients:boolean = false;
	IsEditing:boolean = true;

	constructor(private storageService:PantryService) {

	}

	addNewIngredient() {
		this.Area.Ingredients.push(new Ingredient())
	}

	ingredientDeleted(ingredient:Ingredient) {
		this.Area.Ingredients = this.Area.Ingredients.filter((el, index, ingreds) => {
			return el != ingredient;
		});
	}

	saveAreaName() {
		if(this.Area.Name != "") {
			this.storageService.save(this.Area).subscribe(() => {
				this.IsEditing = false;
			});
		}
	}

	ngOnInit() {

	}

	editAreaName() {
		this.IsEditing = true;
	}

	deleteArea() {
		// TODO
	}

	saveArea() {
		this.storageService.save(this.Area).subscribe((res)=>{
			console.log(res);
		});
	}
}