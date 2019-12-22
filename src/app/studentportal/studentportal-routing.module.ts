import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudenthomeComponent } from "../studentportal/studenthome/studenthome.component";
import { UserprofileComponent } from "./userprofile/userprofile.component";
import { AuthstudentGuard } from "../studentportal/auth/authstudent.guard";
const routes: Routes = [
  {
    path: "studentprofile",
    component: StudenthomeComponent,
    canActivate: [AuthstudentGuard],
    children: [
      {
        path: ":id",
        component: UserprofileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentportalRoutingModule {}
