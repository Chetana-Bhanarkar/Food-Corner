import { Component , OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { CartItem } from 'src/app/model/cartItem.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart ! : Cart ;  
  constructor(private _cartService : CartService){
    this._cartService.getCartObservable().subscribe((cart)=>{
      this.cart = cart ; 
    })
  }
  ngOnInit(): void {}

  removeFromCart(cartItem : CartItem){
    this._cartService.removeFromCart(cartItem.food.id) ; 
  }

  changeQuantity(cartItem : CartItem , quantity : string){
    const count = parseInt(quantity);
    this._cartService.changeQuantity(cartItem.food.id , count) ; 
  }

}
