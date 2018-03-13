import {Component,Input} from '@angular/core'
import {Ingredient} from '../ingredient'
import {UnitOfMeasureService} from '@services'

@Component({
	selector:'ingredient-editor',
	inputs:['edit'],
	providers:[UnitOfMeasureService],
	templateUrl:'./ingredient-editor.component.html'
})
export class IngredientEditComponent {
	@Input() edit:Ingredient;

	fullDescription:string = "";

	constructor(private unitOfMeasureService:UnitOfMeasureService) {

	}

	ngOnInit() {
		if(this.edit.UnitOfMeasure == null) { this.edit.UnitOfMeasure = "unit"; }
		
		this.fullDescription = this.edit.Quantity == null ? "" : `${this.edit.Quantity} ${this.edit.UnitOfMeasure} ${this.edit.Name}`;
	}

	parse(event:any) {
		let quantity = null;
		let uom = null;
		let split = event.target.value.split(" ");
		let descriptionSplit = [];

		for(let item of split) {
			if(uom === null && this.unitOfMeasureService.All().some(val => val == item.trim())) {
				uom = item;
			} else if(quantity === null && item.match(/\d+\.?\d*/)) {
				quantity = parseFloat(item);
			} else {
				descriptionSplit.push(item);
			}
		}

		let description = descriptionSplit.join(" ");

		this.edit.Name = description;
		this.edit.Quantity = quantity;
		this.edit.UnitOfMeasure = uom;
	}
}