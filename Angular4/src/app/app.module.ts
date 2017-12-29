import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course-service.service';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CourseService //Where all dependency injections are!
  //There will be only once instance of the service for all your declarations to use, following Singleton-ish pattern!!
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
