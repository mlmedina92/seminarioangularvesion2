import { Component } from '@angular/core';
import { CourseCartService } from '../course-cart.service';
import { Course } from '../courses-list/Course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  // atributos
  cartList$: Observable<Course[]>;

  constructor(private cart: CourseCartService) {
    this.cartList$ = cart.cartList.asObservable();
    
    // cart.cartList.subscribe((c) => (this.cartList = c)); //me subscribo al servicio

    //como buena prctica hay que desusbcribirse cuando me subscribo 

  }
}
