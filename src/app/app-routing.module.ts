import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AdminhomeComponent } from "../app/adminportal/adminhome/adminhome.component";
import { AdminportalModule } from "../app/adminportal/adminportal.module";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
  // {
  //   path: "admin/home",
  //   component: AdminhomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminportalModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
