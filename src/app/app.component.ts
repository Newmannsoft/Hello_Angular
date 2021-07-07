import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecomerce';

  items = ['Arnold', 'Rafa', 'Pedro', 'Juliana'];


  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/001.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/002.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/003.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/004.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/005.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/006.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  addItem() {
    this.items.push('Nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
