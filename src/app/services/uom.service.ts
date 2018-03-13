import {Injectable} from '@angular/core'

@Injectable()
export class UnitOfMeasureService {
	// TODO: get this list from server
	private UnitsOfMeasure:string[] = ["oz",
							"ounces",
							"lb",
							"lbs",
							"pound",
							"pounds",
							"tbsp",
							"tablespoon",
							"tablespoons",
							"teaspoon",
							"teaspoons",
							"tsp",
							"g",
							"gram",
							"grams",
							"cup",
							"cups",
							"whole",
							"container",
							"containers",
							"pieces",
							"sprigs",
							"leafs",
							"slices"];

	All() {
		return this.UnitsOfMeasure;
	}

	Save(uom:string) {
		let index = this.UnitsOfMeasure.indexOf(uom);
		if(index === -1)
			this.UnitsOfMeasure.push(uom);
	}
}