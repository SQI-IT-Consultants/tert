import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';
import { MobileStudentProfileComponent } from './mobile-student-profile/mobile-student-profile.component';
import { MobileStaffProfileComponent } from './mobile-staff-profile/mobile-staff-profile.component'
const routes: Routes = [
    {path: 'student/studentList', component:StudentComponent},
    {path: 'staff/staffList', component:StaffComponent},
    {path: 'student/:id', component: MobileStudentProfileComponent},
    {path: 'staff/:id', component: MobileStaffProfileComponent},
    
];
@NgModule({
  
  imports :[RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}