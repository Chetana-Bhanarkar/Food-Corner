import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/model/food.model';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit{

  constructor(private route : ActivatedRoute, private _food : FoodService){}
  food! : Food ; 

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      if(params.id)
      this.food = this._food.getFoodbyID(params.id)
    })
  }



}
