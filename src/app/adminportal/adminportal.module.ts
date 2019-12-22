import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AdminportalRoutingModule } from "./adminportal-routing.module";
import { AdminhomeComponent } from "./adminhome/adminhome.component";
import { FooterhomeComponent } from "./adminhome/footerhome/footerhome.component";
import { HeaderhomeComponent } from "../../app/components/headerhome/headerhome.component";
import { LeftnavComponent } from "./leftnav/leftnav.component";
import { CandidatedetailsComponent } from "./candidatedetails/candidatedetails.component";
import { SortableDirective } from "./directives/sortable.directive";
import { FormsModule } from "@angular/forms";
import { AdminService } from "./service/admin.service";
import { DecimalPipe } from "@angular/common";
import { StudentformComponent } from "./studentform/studentform.component";
import { BatchdetailsComponent } from "./batchdetails/batchdetails.component";
import { BatchformComponent } from "./batchform/batchform.component";
import { FinancesComponent } from "./finances/finances.component";
import { TransactionformComponent } from "./transactionform/transactionform.component";
import { NgxLoadingModule } from "ngx-loading";
import { TilesComponent } from './tiles/tiles.component';
@NgModule({
  declarations: [
    AdminhomeComponent,
    FooterhomeComponent,
    HeaderhomeComponent,
    LeftnavComponent,
    CandidatedetailsComponent,
    SortableDirective,
    StudentformComponent,
    BatchdetailsComponent,
    BatchformComponent,
    FinancesComponent,
    TransactionformComponent,
    TilesComponent
  ],
  imports: [
    CommonModule,
    AdminportalRoutingModule,
    FormsModule,
    NgbModule,
    NgxLoadingModule.forRoot({})
  ],
  exports: [FooterhomeComponent, HeaderhomeComponent],
  providers: [AdminService, DecimalPipe],
  entryComponents: [
    StudentformComponent,
    BatchformComponent,
    TransactionformComponent
  ]
})
export class AdminportalModule {}
