import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/medels/Cart';
import { CartItem } from '../shared/medels/CartItem';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  
  cart!:Cart;
  constructor(private cartService: CartService) { 
    this.setCart();
  }

  ngOnInit(): void {
    
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
}
