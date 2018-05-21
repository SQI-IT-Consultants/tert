import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable} from 'rxjs/Rx';
import { Material } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentComponent } from './student/student.component';
import { StudlistComponent } from './studlist/studlist.component';
import { StudprofComponent } from './studprof/studprof.component';
import { StudShortProfComponent } from './stud-short-prof/stud-short-prof.component';
import { MobileStudentProfileComponent } from './mobile-student-profile/mobile-student-profile.component';
import { StaffComponent } from './staff/staff.component';
import { StafflistComponent } from './stafflist/stafflist.component';
import { StaffprofComponent } from './staffprof/staffprof.component';
import { MobileStaffProfileComponent } from './mobile-staff-profile/mobile-staff-profile.component';
import{ FiltercheckComponent} from './filtercheck/filtercheck.component'
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './filter.pipe';
import { StudentDefaultComponent } from './student-default/student-default.component';
import { StaffDefaultComponent } from './staff-default/staff-default.component';
import { StudentNewComponent } from './student-new/student-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CovalentFileModule } from '@covalent/core/file';

@NgModule({
  
  declarations: [
    AppComponent,
    NavComponent,
    StudentComponent,
    StudlistComponent,
    StudprofComponent,
    StudShortProfComponent,
    MobileStudentProfileComponent,
    StaffComponent,
    StafflistComponent,
    StaffprofComponent,
    FiltercheckComponent,
    MobileStaffProfileComponent,
    FilterPipe,
    StudentDefaultComponent,
    StaffDefaultComponent,
    StudentNewComponent,
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    Material,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
