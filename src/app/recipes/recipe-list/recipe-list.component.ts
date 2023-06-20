import {Component} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('allRecipeDemo', 'allRecipeDemo description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThD6H4EBtbDfqlhlrtYEBmuAk2dEyBa7rdMsqNoJ1rRw&s'),
    new Recipe('allRecipeDemo', 'allRecipeDemo description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThD6H4EBtbDfqlhlrtYEBmuAk2dEyBa7rdMsqNoJ1rRw&s'),
    new Recipe('allRecipeDemo', 'allRecipeDemo description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThD6H4EBtbDfqlhlrtYEBmuAk2dEyBa7rdMsqNoJ1rRw&s'),
    new Recipe('allRecipeDemo', 'allRecipeDemo description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThD6H4EBtbDfqlhlrtYEBmuAk2dEyBa7rdMsqNoJ1rRw&s'),
    new Recipe('allRecipeDemo', 'allRecipeDemo description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThD6H4EBtbDfqlhlrtYEBmuAk2dEyBa7rdMsqNoJ1rRw&s'),

  ];

  constructor() {
  }
}
