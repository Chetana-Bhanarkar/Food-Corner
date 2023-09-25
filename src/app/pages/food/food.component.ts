import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/model/food.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit{

  constructor(private route : ActivatedRoute, private _food : FoodService , private _cart : CartService , private router : Router){}
  food! : Food ; 

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      if(params.id)
      this.food = this._food.getFoodbyID(params.id)
    })
  }


  addToCart(){
    this._cart.addToCart(this.food);
    this.router.navigateByUrl('/cart')
  }


}
