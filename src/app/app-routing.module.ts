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
import { ExamSetUpComponent } from './exam-set-up/exam-set-up.component';
import { AccountChartComponent} from './account-chart/account-chart.component'
import { AccountlistComponent } from './accountlist/accountlist.component';
import { DashboardComponent } from './dashboard/dashboard.component'
const routes: Routes = [
    {path: 'student/studentList', component:StudentComponent},
    {path: 'staff/staffList', component:StaffComponent},
    {path: 'student/:id', component: MobileStudentProfileComponent},
    {path: 'staff/:id', component: MobileStaffProfileComponent},
    {path: 'studentDefault', component:StudentDefaultComponent},
    {path: 'staffDefault', component:StaffDefaultComponent},
    {path: 'studentNew', component: StudentNewComponent},
    {path: 'examSetUp', component: ExamSetUpComponent},
    {path: 'accountChart', component:AccountChartComponent},
    {path: 'dashboard', component:DashboardComponent}
];
@NgModule({
  
  imports :[RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}