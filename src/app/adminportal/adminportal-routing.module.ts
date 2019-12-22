import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminhomeComponent } from "./adminhome/adminhome.component";
import { CandidatedetailsComponent } from "./candidatedetails/candidatedetails.component";
import { BatchdetailsComponent } from "../adminportal/batchdetails/batchdetails.component";
import { FinancesComponent } from "../adminportal/finances/finances.component";
import { AdminGuard } from "./auth/admin.guard";
import { TilesComponent } from "./tiles/tiles.component";

const routes: Routes = [
  {
    path: "admin",
    component: AdminhomeComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: "dashboard",
        component: TilesComponent
      },
      {
        path: "candidates",
        component: CandidatedetailsComponent
      },
      {
        path: "batches",
        component: BatchdetailsComponent
      },
      {
        path: "finances",
        component: FinancesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminportalRoutingModule {}
