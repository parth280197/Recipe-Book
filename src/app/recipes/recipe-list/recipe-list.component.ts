import {Component, OnInit} from "@angular/core";
import {Recipe} from "../Recipe.model";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "pav bhaji",
      "Pav Bhaji is a very famous Maharashtrian street food that is popular not only in every part of our country but world wide. It is unique and super delicious dish of variety of vegetables that is particularly cooked in butter with special spicy pav bhaji masala.",
      "https://www.cubesnjuliennes.com/wp-content/uploads/2019/10/Pav-Bhaji.jpg"
    ),
    new Recipe(
      "pav bhaji",
      "Pav Bhaji is a very famous Maharashtrian street food that is popular not only in every part of our country but world wide. It is unique and super delicious dish of variety of vegetables that is particularly cooked in butter with special spicy pav bhaji masala.",
      "https://www.cubesnjuliennes.com/wp-content/uploads/2019/10/Pav-Bhaji.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
