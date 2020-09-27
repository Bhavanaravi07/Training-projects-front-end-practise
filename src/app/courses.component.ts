import {Component} from '@angular/core';
import { CoursesService } from './courses.services';
 

 @Component({
     selector:'courses',
     //String interpolation
     template:`<h2>{{getTitle() }}</h2>
               <ul>
                  <li *ngFor="let course of courses">
                       {{course}}
                  </li>
                </ul>
                <img [src] = "imgUrl" />
                <img src={{imgUrl}}/>
                `       

 })
 
 export class CoursesComponent{
     title = "List of Courses";
     colspan = 2;
     imgUrl = "background.jpeg"
     courses ;

     constructor(service : CoursesService){
         this.courses = service.getCourses();
     }

     getTitle(){
         return this.title;
     }


}