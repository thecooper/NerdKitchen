import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '@app/services';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import { IngredientCategory } from '@app/features/ingredient/ingredient-category';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  private recipe : Recipe;
  private ingredientCategories : any = IngredientCategory;

  constructor(private recipeService : RecipeService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.recipeService
      .get(this.activatedRoute.snapshot.params["id"])
      .subscribe(recipe => { 
        this.recipe = recipe;
      });
  }

  Save() : void {
    this.recipeService.save(this.recipe)
    .subscribe(saved => {
      console.log("Recipe was saved!");
    });
  }
}
