import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { IngredientsModule } from './ingredient/ingredients.module';
import { PantriesModule } from './pantries/pantries.module';
import { RecipesModule } from './recipe/recipes.module';
import { ShoppingListModule } from "@app/features/shopping-list/shopping-list.module";

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    IngredientsModule,
    RecipesModule,
    PantriesModule,
    ShoppingListModule
  ],
  exports: [
    CommonModule,
    FeaturesRoutingModule,
    IngredientsModule,
    RecipesModule,
    PantriesModule,
    ShoppingListModule
  ],
  declarations: []
})
export class FeaturesModule { }
