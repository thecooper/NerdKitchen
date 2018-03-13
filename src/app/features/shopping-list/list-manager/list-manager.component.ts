import { Component } from '@angular/core'
import { ShoppingList } from '../shopping-list'
import { ShoppingListService } from '@services'

@Component({
	selector:'list-manager',
	templateUrl:'./list-manager.html',
})
export class ListManagerComponent {
	Lists:ShoppingList[];

	constructor(private _ShoppingListService:ShoppingListService) { }

	ngOnInit() {
		this._ShoppingListService.all().subscribe(lists => {
			this.Lists = lists;
		});
	}

	AddNewList() {
		this.Lists.push(new ShoppingList);
	}

	DeleteList($list:ShoppingList) {
		this._ShoppingListService.delete($list).subscribe(result => {
			console.log("Deleted list: ", $list);
			this.Lists.splice(this.Lists.indexOf($list), 1);
		})
	}

	SaveList($list:ShoppingList) {
		this._ShoppingListService.save($list).subscribe(result => {
			console.log("Saved List");
			console.log(result);
		})
	}
}