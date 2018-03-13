import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import { Http,Response } from '@angular/http'
import { ShoppingList } from '@app/features/shopping-list/shopping-list'

@Injectable()
export class ShoppingListService {

	constructor(private http:Http) {

	}

	all() {
		return this.http.get("http://localhost:5984/shopping-list/_all_docs?include_docs=true",{})
			.map((res:Response) => res.json())
			.map((serverJson:any) => {
				let shoppingListArray:ShoppingList[] = [];
				for(var i = 0; i < serverJson["rows"].length; i++) {
					if(serverJson["rows"][i].doc) {
						let newShoppingList : ShoppingList = serverJson["rows"][i].doc;
						shoppingListArray.push(newShoppingList);
					}
				}
				return shoppingListArray;
			});
	}

	get(id:number) {
		return this.http.get(`http://localhost:5984/shopping-list/${id}`, {})
			.map((res:Response) => res.json());
	}

	save(storage:ShoppingList) {
		let options = {data:storage};
		if(storage.Id == null || storage.Id == "") {
			return this.http.post("http://localhost:5984/shopping-list/", options);
		} else {
			return this.http.put(`http://localhost:5984/shopping-list/${storage.Id}?rev=${storage.Revision}`, options);
		}
	}

	delete(storage:ShoppingList) {
		return this.http.delete(`http://localhost:5984/shopping-list/${storage.Id}?rev=${storage.Revision}`);
	}
}