import { Component} from '@angular/core';
import{CourseService} from './course-service.service';

@Component({
  selector: 'course',   //<courses>  if you wanted <div class = courses> youd do .courses

  //In template you want to use `` because it lets you break the div up.
  //This template utilizes the ngFor, lists authors, and creates two buttons, that utilize class binding, style binding, and event Binding

  template: `
            <h2>{{"Title:" + title}}</h2>
            <h3> {{courses.length + " Authors"}} </h3>
            <ul>
              <li *ngFor= "let course of courses">
                    {{course}}
              </li>
              <span [class] = "isStar? 'glyphicon glyphicon-star': 'glyphicon glyphicon-star-empty'" (click) = "starClick()"></span>
              <button [class.active] = "isActive" (click) = "onClick()" [style.backgroundColor] = "isActive ? 'blue':'white' "> Change Color </button>
              <input [(ngModel)] = "twoWayVar" (keyUp.enter) = "onKeyUp()"/>
            </ul>
            `
})
export class CourseComponent{

  title = "List of courses";   //Binding this to the view. If you change this, it'll refect on the DOM
  courses;  //["course1", "course2", "course3"];
  isActive = true;
  twoWayVar = "Two Way Binding";
  isStar = false;

  //Logic for HTTP service could be here, but we want to decouple it from here! Better for testing purposes
  //So instead we create a service and use dependency injection!
  onClick(){
    this.isActive = !this.isActive;
    console.log("isActive variable is changed to: ", this.isActive);
  }
  starClick(){
    this.isStar = !this.isStar;
  }
  onKeyUp(){
    console.log("on key up this is shown: ", this.twoWayVar);
  }


  constructor(service: CourseService){  //This parameter means you're injecting Service(decouple!)
    //let service = new CoursesService();  //Problem with this is you're tightly coupling this with the component class and testing would be hard
    this.courses = service.getCourses();

}
