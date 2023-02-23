import { Component, OnInit } from '@angular/core';
import { products } from '../products'; // importa proprio la lista di prodotti "products"
                                        // quindi la vede e la puo' usare nella classe

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  _products = products; // assegna la lista "products" ad una nuova variabile "_products"

  share() {
    window.alert('The product has been shared!');
  }


}

