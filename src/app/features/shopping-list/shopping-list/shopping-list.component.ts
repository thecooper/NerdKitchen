import { Component, Input, EventEmitter, Output } from "@angular/core"
import { ShoppingList } from "../shopping-list"

@Component({
	selector:"shopping-list",
	templateUrl:"./shopping-list.html"
})
export class ShoppingListComponent {
	@Input() List:ShoppingList;
	@Output() ListDeleted = new EventEmitter<ShoppingList>();
	@Output() SaveClicked = new EventEmitter<ShoppingList>();

	Delete() {
		this.ListDeleted.emit(this.List);
	}

	Save() {
		this.SaveClicked.emit(this.List);
	}
}