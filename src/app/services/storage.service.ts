import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import { Http,Response } from '@angular/http'
import { Pantry } from '@app/features/pantries'

@Injectable()
export class PantryService {

	constructor(private http:Http) {

	}

	all() {
		return this.http.get("http://localhost:5984/storage/_all_docs?include_docs=true",{})
			.map((res:Response) => res.json())
			.map((serverJson:any) => {
				let storageArray:Pantry[] = [];
				for(var i = 0; i < serverJson["rows"].length; i++) {
					if(serverJson["rows"][i].doc) {
						let newPantry : Pantry = serverJson["rows"][i].doc;
						storageArray.push(newPantry);
					}
				}
				return storageArray;
			});
	}

	get(id:number) {
		return this.http.get(`http://localhost:5984/storage/${id}`, {})
			.map((res:Response) => res.json());
	}

	save(pantry:Pantry) {
		let options = {data:pantry};
		if(pantry.Id == null) {
			return this.http.post("http://localhost:5984/storage/", options);
		} else {
			return this.http.put(`http://localhost:5984/storage/${pantry.Id}?rev=${pantry.Revision}`, options);
		}
	}

	delete(pantry:Pantry) {
		return this.http.delete(`http://localhost:5984/storage/${pantry.Id}?rev=${pantry.Revision}`);
	}
}