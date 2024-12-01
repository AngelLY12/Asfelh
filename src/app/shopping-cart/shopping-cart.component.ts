import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  products: any[] = [
    { id: 1, name: 'Producto 1', price: 10, quantity: 1 },
    { id: 2, name: 'Producto 2', price: 15, quantity: 1 }
  ];
  addToCart(product:any) {
    // Lógica para agregar unanyo al carrito
    // ...
  }

  removeFromCart(product:any) {
    // Lógica para eliminar un producto del carrito
    // ...
  }

  calculateTotal() {
    // Lógica para calcular el total del pedido
    // ...
  }
}
