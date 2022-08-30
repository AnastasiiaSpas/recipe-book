import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputNameRef!: ElementRef;
  @ViewChild('inputAmount') inputAmountRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.inputNameRef.nativeElement.value;
    const ingAmount = this.inputAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.ingredientAdded.emit(newIngredient)
  }

  onClear(){
    this.inputNameRef.nativeElement.value = '';
    this.inputAmountRef.nativeElement.value = ''
  }
}
