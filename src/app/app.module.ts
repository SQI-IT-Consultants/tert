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
import { StaffNewComponent } from './staff-new/staff-new.component';
import { SelComponent } from './sel/sel.component';
import { ExamComponent } from './exam/exam.component';
import { ExamService } from './service/exam.service';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamSetUpComponent } from './exam-set-up/exam-set-up.component';
import { AccountComponent } from './account/account.component';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { AccountService } from './service/account.service';
import { AccountChartComponent } from './account-chart/account-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashrecComponent } from './dashrec/dashrec.component';
import { HttpClientModule } from  '@angular/common/http';
import { DashCourseComponent } from './dash-course/dash-course.component';
import { DashCourseService } from './service/dash-course.service';
import { CoursesFullRecComponent } from './courses-full-rec/courses-full-rec.component';


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
    StaffNewComponent,
    SelComponent,
    ExamComponent,
    ExamListComponent,
    ExamSetUpComponent,
    AccountComponent,
    AccountlistComponent,
    AccountChartComponent,
    DashboardComponent,
    DashrecComponent,
    DashCourseComponent,
    CoursesFullRecComponent
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    Material,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
 
  ],
  providers: [ExamService, AccountService,DashCourseService],
  entryComponents:[ExamComponent,AccountComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
