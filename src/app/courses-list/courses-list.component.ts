import { Component } from '@angular/core';
import { Course } from './Course';
import { CourseCartService } from '../course-cart.service';
import { CourseDataService } from '../course-data.service';

@Component({
  selector: 'app-courses-list',
  standalone: false,
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss',
})
export class CoursesListComponent {
  // course seria un atributo de la clase CoursesListComponent, si fuera private no podria acceder el html
  // interfaces para definir TIPOS de datos mas complejos defino que tipos de atributos tendra un objeto
  // Defino una interfaz para crear nuestros cursos

  // courses: Course[] = [
  //   {
  //     // es del tipo interface Course,tipe el objeto curso
  //     name: 'Curso nivel Inicial',
  //     duration: '1 mes',
  //     price: 35.0,
  //     quota: 10, //cupo
  //     image: 'img/course1.jpeg',
  //     offer: false,
  //     quantity: 0,
  //   },
  //   {
  //     name: 'Curso nivel Intermedio',
  //     duration: '2 meses',
  //     price: 45.0,
  //     quota: 7, //cupo
  //     image: 'img/course1.jpeg',
  //     offer: true,
  //     quantity: 0,
  //   },
  //   {
  //     name: 'Curso nivel Experto',
  //     duration: '3 meses',
  //     price: 55.0,
  //     quota: 10, //cupo
  //     image: 'img/course1.jpeg',
  //     offer: false,
  //     quantity: 0,
  //   },
  //   {
  //     name: 'Clases individuales',
  //     duration: '1 clase sola',
  //     price: 55.0,
  //     quota: 0, //cupo- stock
  //     image: 'img/course1.jpeg',
  //     offer: false,
  //     quantity: 0,
  //   },
  // ];

  courses: Course[] = [];

  constructor(
    private cart: CourseCartService,
    private courseDataService: CourseDataService
  ) { }

  ngOnInit(): void {
    this.courseDataService.getAll()
      .subscribe(courses => this.courses = courses); //mi atributo courses se conviernte en el que viene
  }

  addToCart(course: Course): void {
    /* llama al this.addToCart de cart-ServiceWorker.ts*/
    if (course.quantity != 0) {
      this.cart.addToCart(course);
    }
    course.quota -= course.quantity; //descuenta del stock, la cant seleccionada por el us
    course.quantity = 0; //reinicia la cantidad
  }
  
  maxReached(m: number) {
    alert('llegaste al maximo del stock! ');
  }
}
