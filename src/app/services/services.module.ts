import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from "@app/services/recipe-mock.service";
import { ShoppingListService, PantryService, UnitOfMeasureService } from ".";
import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    RecipeService,
    ShoppingListService,
    PantryService,
    UnitOfMeasureService
  ]  
})
export class ServicesModule { }
