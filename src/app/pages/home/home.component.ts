import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private _food : FoodService , private route : ActivatedRoute ){
    this.foods = _food.getAll()
  } 

  ngOnInit(): void {

    this.route.params.subscribe((params)=>{
      console.log(params);
      
      if(params.searchItem)
        this.foods = this._food.getSearchedFood(params.searchItem)
      else if(params.tag)
        this.foods = this._food.getAllByTag(params.tag)

      else
        this.foods = this._food.getAll()
    })
  }
  
}
