import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';
import { MobileStudentProfileComponent } from './mobile-student-profile/mobile-student-profile.component';
import { MobileStaffProfileComponent } from './mobile-staff-profile/mobile-staff-profile.component';
import { StudlistComponent} from './studlist/studlist.component';
import { StudentDefaultComponent } from './student-default/student-default.component';
import { StaffDefaultComponent } from './staff-default/staff-default.component';
import { StudentNewComponent } from './student-new/student-new.component';
import { ExamListComponent} from './exam-list/exam-list.component';
import { ExamSetUpComponent } from './exam-set-up/exam-set-up.component'
const routes: Routes = [
    {path: 'student/studentList', component:StudentComponent},
    {path: 'staff/staffList', component:StaffComponent},
    {path: 'student/:id', component: MobileStudentProfileComponent},
    {path: 'staff/:id', component: MobileStaffProfileComponent},
    {path: 'studentDefault', component:StudentDefaultComponent},
    {path: 'staffDefault', component:StaffDefaultComponent},
    {path: 'studentNew', component: StudentNewComponent},
    {path: 'exam', component: ExamListComponent},
    {path: 'examSetUp', component: ExamSetUpComponent}
];
@NgModule({
  
  imports :[RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}