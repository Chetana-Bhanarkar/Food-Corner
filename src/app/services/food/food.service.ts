import { R3BoundTarget } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Food } from 'src/app/model/food.model';
import { Tag } from 'src/app/model/tags.model';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {}

  getAll():Food[]{
    return sample_foods ; 
  }

  getSearchedFood(searchItem : string){
    return this.getAll().filter(food => food.name?.toLowerCase().includes(searchItem.toLowerCase()))
  }

  getAllByTag(tag : string):Tag[]{
    return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))
  }

  getAllTag():Tag[]{
    return [
      {name : 'All' , count : 8},
      {name : 'fastfood' , count : 4},
      {name : 'pizza' , count : 3},
      {name : 'lunch' , count : 3},
      {name : 'slowfood' , count : 2},
      {name : 'hamburger' , count : 2},
      {name : 'fry' , count : 1},
      {name : 'soup' , count : 1},
  ]
  }

  getFoodbyID(foodID : string){
    return this.getAll().find(food => food.id === foodID) ?? new Food() ; 
  }
}
