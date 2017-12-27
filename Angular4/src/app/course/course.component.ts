import { Component} from '@angular/core';
import{CourseService} from './course-service.service';

@Component({
  selector: 'course',   //<courses>  if you wanted <div class = courses> youd do .courses

  //In template you want to use `` because it lets you break the div up. Use * next to any ng directive
  //class binding and style binding being used

  template: `
            <h2>{{"Title:" + title}}</h2>
            <h3> {{courses.length + " Authors"}} </h3>
            <ul>
              <li *ngFor= "let course of courses">
                    {{course}}
                    <button [class.active] = "isActive" [style.backgroundColor] = "isActive ? 'blue':'white' "> Class Binding </button>
                    <button (click) = "onClick()"> Change Color </button>
              </li>
            </ul>
            `
})
export class CourseComponent{

  title = "List of courses";   //Binding this to the view. If you change this, it'll refect on the DOM
  courses;  //["course1", "course2", "course3"];
  isActive = true;
  //Logic for HTTP service could be here, but we want to decouple it from here! Better for testing purposes
  //So instead we create a service and use dependency injection!
  onClick(){
    this.isActive = !this.isActive;
    console.log("isActive variable is changed to: ", this.isActive);
  }


  constructor(service: CourseService){  //This parameter means you're injecting Service(decouple!)
    //let service = new CoursesService();  //Problem with this is you're tightly coupling this with the component class and testing would be hard
    this.courses = service.getCourses();

}
