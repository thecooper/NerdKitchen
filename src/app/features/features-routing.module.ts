import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientComponent } from "./ingredient/ingredient/ingredient.component";

import { RecipesComponent } from "./recipe/recipes/recipe-manager.component";
import { RecipeComponent } from "./recipe/recipe/recipe.component";

import { PantriesComponent } from "./pantries/pantries/pantries.component";
import { PantryEditComponent } from "./pantries/pantry-edit/pantry-edit.component";

import { ListManagerComponent } from "./shopping-list/list-manager/list-manager.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list/shopping-list.component";
import { RecipeEditComponent } from '@app/features/recipe/recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path: "ingredients", 
    component: IngredientComponent,
  },
  {
    path: "recipes",
    component: RecipesComponent,
  },
  {
    path: "recipes/:id",
    component: RecipeComponent
  },
  {
    path: "recipes/:id/edit",
    component: RecipeEditComponent
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
