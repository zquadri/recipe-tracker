import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor() {}
  ngOnInit(): void {
    this.recipes.push(
      {
        name: 'strawberry pancakes',
        cooksFor: 2,
        cookTime: 1,
        difficulty: 'easy',
      },
      {
        name: 'fried rice',
        cooksFor: 2,
        cookTime: 10,
        difficulty: 'easy',
      }
    );
  }

  deleteRecipe(recipe: Recipe) {
    const index: number = this.recipes.indexOf(recipe);
    if (index !== -1) {
      this.recipes.splice(index, 1);
    }
  }
}
