import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientComponent } from "./ingredient/ingredient/ingredient.component";
import { IngredientEditComponent } from "./ingredient/ingredient-editor/ingredient-editor.component";

import { RecipesComponent } from "./recipe/recipes/recipes.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";

import { PantriesComponent } from "./pantries/pantries/pantries.component";
import { PantryEditComponent } from "./pantries/pantry-edit/pantry-edit.component";

import { ListManagerComponent } from "./shopping-list/list-manager/list-manager.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list/shopping-list.component";

const routes: Routes = [
  { path: "ingredients", 
    component: IngredientComponent,
    children: [
      {
        path: "edit/:id",
        component: IngredientEditComponent
      }
    ]
  },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      {
        path: "edit/:id",
        component: RecipeEditComponent
      }
    ]
  },
  {
    path: "pantries",
    component: PantriesComponent,
    children: [
      {
        path: "edit/:id",
        component: PantryEditComponent
      }
    ]
  },
  {
    path: "shopping-lists",
    component: ListManagerComponent,
    children: [
      {
        path: "edit/:id",
        component: ShoppingListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
