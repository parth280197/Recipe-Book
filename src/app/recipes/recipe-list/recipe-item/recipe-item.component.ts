import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Recipe} from "../../Recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  @Output() onRecipeSelect = new EventEmitter();
  @Input() recipe: Recipe;
  constructor() {}
  selectRecipe = () => {
    this.onRecipeSelect.emit();
  };
  ngOnInit() {}
}
