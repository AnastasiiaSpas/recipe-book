import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {
  @Output() ingrToDelete = new EventEmitter<Ingredient>()

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  OnIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  onChoose(ingredient: Ingredient){
    let indexOfIngr = this.ingredients.indexOf(ingredient)
    this.ingredients.splice(indexOfIngr,1)
    console.log(ingredient)
  }

}
