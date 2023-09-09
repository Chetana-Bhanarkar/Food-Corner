import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/model/food.model';
import { FoodService } from 'src/app/services/food/food.service';
// import { RatingModule } from 'ng-starrating;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods : Food[] = [];

  constructor(private _food : FoodService ){
    this.foods = _food.getAll()
  } 

  ngOnInit(): void {}

}
