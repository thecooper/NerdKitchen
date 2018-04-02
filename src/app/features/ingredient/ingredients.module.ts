import { NgModule } from '@angular/core';
import { AngularCommonModule } from '@app/angular-common.module';

import { IngredientComponent } from "./ingredient/ingredient.component";

@NgModule({
  imports: [
    AngularCommonModule
  ],
  exports: [
    IngredientComponent,
  ],
  declarations: [
    IngredientComponent,
  ]
})
export class IngredientsModule { }
