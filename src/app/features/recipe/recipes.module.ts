import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularCommonModule } from '@app/angular-common.module';

import { 
	MatButtonModule,
	MatIconModule
} from '@angular/material'

import { RecipesComponent } from './recipes/recipe-manager.component'
import { RecipeComponent } from './recipe/recipe.component'

import { IngredientsModule } from '@app/features/ingredient/ingredients.module';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component'

@NgModule({
	imports:[
		AngularCommonModule,
		IngredientsModule,
		MatButtonModule,
		MatIconModule,
		RouterModule
	],
	declarations: [
		RecipeComponent, 
		RecipesComponent, RecipeEditComponent,
	],
	exports: [
		RecipeComponent, 
		RecipesComponent
	],
	providers: []
})
export class RecipesModule { }