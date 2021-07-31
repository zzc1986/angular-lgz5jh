import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  product_list = products;

  share() {
    console.log('The product has been shared!');
    window.alert('The product has been shared!');
  }

  onNotify() {
    console.log('You will be notified when the product goes on sale!');
    window.alert('You will be notified when the product goes on sale');
  }
}
