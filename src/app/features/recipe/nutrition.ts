export class Nutrition {
	Calories:number;

	// Macronutrients
	Fat:number;
	Carbohydrates:number;
	Protein:number;

	// Other
	Fiber:number;
	Sodium:number;

	constructor() {
		this.Calories = 0;
		this.Fat = 0;
		this.Carbohydrates = 0;
		this.Protein = 0;
		this.Fiber = 0;
		this.Sodium = 0;
	}
}