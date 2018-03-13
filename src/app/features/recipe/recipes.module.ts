import { NgModule } from '@angular/core';

import { AngularCommonModule } from '@app/angular-common.module';

import { 
	MatButtonModule,
	MatIconModule
} from '@angular/material'

import { RecipesComponent } from './recipes/recipes.component'
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component'

import { IngredientsModule } from '@app/features/ingredient/ingredients.module'

@NgModule({
	imports:[
		AngularCommonModule,
		IngredientsModule,
		MatButtonModule,
		MatIconModule
	],
	declarations: [
		RecipeEditComponent, 
		RecipesComponent,
	],
	exports: [
		RecipeEditComponent, 
		RecipesComponent
	],
	providers: []
})
export class RecipesModule { }