import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable} from 'rxjs/Rx';
import { Material } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StudentComponent } from './student/student.component';
import { StudlistComponent } from './studlist/studlist.component';
import { StudprofComponent } from './studprof/studprof.component';
import { StudShortProfComponent } from './stud-short-prof/stud-short-prof.component';
import { MobileStudentProfileComponent } from './mobile-student-profile/mobile-student-profile.component';

@NgModule({
  
  declarations: [
    AppComponent,
    NavComponent,
    StaffListComponent,
    StudentComponent,
    StudlistComponent,
    StudprofComponent,
    StudShortProfComponent,
    MobileStudentProfileComponent
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    Material,
    FlexLayoutModule,
    AppRoutingModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
