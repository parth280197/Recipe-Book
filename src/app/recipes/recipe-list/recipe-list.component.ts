import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Recipe} from "../Recipe.model";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() updateSelectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "pav bhaji",
      "Pav Bhaji is a very famous Maharashtrian street food that is popular not only in every part of our country but world wide. It is unique and super delicious dish of variety of vegetables that is particularly cooked in butter with special spicy pav bhaji masala.",
      "https://www.cubesnjuliennes.com/wp-content/uploads/2019/10/Pav-Bhaji.jpg"
    ),
    new Recipe(
      "Dabeli",
      "Dabeli, kutchi dabeli or double roti is a popular snack food of India, originating in the Kutch or Kachchh region of Gujarat.",
      "https://i.pinimg.com/originals/da/32/5d/da325dcf7251214cf0471225ba3260a7.jpg"
    )
  ];
  constructor() {}
  onRecipeSelect = (selectedRecipe: Recipe) => {
    this.updateSelectedRecipe.emit(selectedRecipe);
  };
  ngOnInit() {}
}
