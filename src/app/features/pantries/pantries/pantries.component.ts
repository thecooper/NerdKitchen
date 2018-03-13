import { Component } from '@angular/core'
import { Ingredient } from '@app/features/ingredient/ingredient'
import { Pantry } from '../pantry'
import { PantryService } from '@services'

@Component({
	selector:'pantry',
	templateUrl:'./pantries.component.html',
	providers:[]
})
export class PantriesComponent {
	storage:Pantry[]

	constructor(private storageService:PantryService) {
		this.storage = [];
	}

	addNewArea() {
		this.storage.push(new Pantry());
	}

	ngOnInit() {
		this.storageService.all().subscribe(storageAreas => {
			this.storage = storageAreas;
		});
	}
}