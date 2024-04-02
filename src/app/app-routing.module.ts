import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { SformComponent } from './sform/sform.component';

const routes: Routes = [
  { path: "form", component: FormComponent },
  { path: "student", component: StudentComponent },
  { path: "student/add", component: StudentAddComponent },
  { path: "student/edit/:id", component: StudentAddComponent },
  { path: "student/:id", component: StudentDetailComponent },
  { path: "sform", component: SformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
