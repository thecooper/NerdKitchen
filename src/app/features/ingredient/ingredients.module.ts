import { NgModule } from '@angular/core';
import { AngularCommonModule } from '@app/angular-common.module';

import { IngredientComponent } from "./ingredient/ingredient.component";
import { IngredientEditComponent } from "./ingredient-editor/ingredient-editor.component";

@NgModule({
  imports: [
    AngularCommonModule
  ],
  exports: [
    IngredientComponent,
    IngredientEditComponent
  ],
  declarations: [
    IngredientComponent,
    IngredientEditComponent
  ]
})
export class IngredientsModule { }
