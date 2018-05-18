import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { MobileStudentProfileComponent } from './mobile-student-profile/mobile-student-profile.component';
const routes: Routes = [
    {path:'student/studentList', component:StudentComponent},
    {path:'student/:id', component: MobileStudentProfileComponent},
];
@NgModule({
  
  imports :[RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}