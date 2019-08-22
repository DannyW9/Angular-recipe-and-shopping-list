import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Garlic Shrimp',
      'A flavorful shrimp dish that can be ready in a few minutes.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg',
    [
      new Ingredient('Prawns', 15),
      new Ingredient('Garlic', 4)
    ]),
    new Recipe(
      'Buffalo Cauliflower Tacos',
      'Hot & Spicy buffalo cauliflower tacos with avocado crema',
      'https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Crema-Recipe.jpg',
    [
      new Ingredient('Buffalo Cauliflower', 3),
      new Ingredient('Avocado', 2)
    ]),
    new Recipe(
      'Asian Chicken Wings',
      'Sticky AND Crispy Asian chicken wings. The perfect party food!',
      'https://www.kitchensanctuary.com/wp-content/uploads/2016/06/Crispy-Chicken-Wings-with-Sticky-Asian-Glaze-square-FS-300x300.jpg',
      [
        new Ingredient('Chicken Wings', 20),
        new Ingredient('Onion', 4)
      ]
    )
  ];

  constructor( private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}

// Manage recipes
