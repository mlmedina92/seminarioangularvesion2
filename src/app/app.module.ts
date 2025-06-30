import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses-list/courses-list.component'; 

import { FormsModule } from '@angular/forms';
import { ItalianoglobalAboutComponent } from './italianoglobal-about/italianoglobal-about.component';
import { CartComponent } from './cart/cart.component';
import { ItalianoglobalCursosComponent } from './italianoglobal-cursos/italianoglobal-cursos.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ItalianoglobalSignUpComponent } from './italianoglobal-sign-up/italianoglobal-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    // se incluyen los componentes que creo en dicho modulo  
    CoursesListComponent,
    ItalianoglobalAboutComponent,
    CartComponent,
    ItalianoglobalCursosComponent,
    InputIntegerComponent,
    ItalianoglobalSignUpComponent,
    // ItalianoglobalSignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
