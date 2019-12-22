import { DecimalPipe } from "@angular/common";
import { Component, QueryList, ViewChildren, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {
  SortDirection,
  SortableDirective,
  SortEvent
} from "../directives/sortable.directive";
import { AdminService } from "../../adminportal/service/admin.service";

import { HttpServicesService } from "../../services/http-services.service";
import { UserDetails } from "src/app/Models/user-details";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { StudentformComponent } from "../studentform/studentform.component";
@Component({
  selector: "app-candidatedetails",
  templateUrl: "./candidatedetails.component.html",
  styleUrls: ["./candidatedetails.component.css"]
})
export class CandidatedetailsComponent implements OnInit {
  loading: boolean;
  ngOnInit(): void {
    this.loadStudentsData();
  }

  students$: Observable<UserDetails[]>;
  total$: Observable<number>;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  constructor(
    private service: AdminService,
    private dataservice: HttpServicesService,
    private modalService: NgbModal
  ) {}

  loadStudentsData() {
    this.loading = true;
    this.dataservice.getStudents().subscribe(
      result => {
        this.service.studentsDetails = [...result];
        this.service.studentsDetails.map(
          item => {
            var joining = new Date(item.dateOfJoining);
            item.dateOfJoining = new Date(
              joining.setDate(joining.getDate() + 1)
            )
              .toISOString()
              .split("T")[0];
            var payment = new Date(item.dateOfPayment);
            item.dateOfPayment = new Date(
              payment.setDate(payment.getDate() + 1)
            )
              .toISOString()
              .split("T")[0];
            var due = new Date(item.dueDate);
            item.dueDate = new Date(due.setDate(due.getDate() + 1))
              .toISOString()
              .split("T")[0];
            this.loading = false;
            //item.dateOfJoining = new Date(item.dateOfJoining).toISOString().split('T')[0]
          },
          err => {
            this.loading = false;
          }
        );
        console.log(this.service.studentsDetails);
        this.service.searchResults();
        this.students$ = this.service.countries$;
        this.total$ = this.service.total$;
      },
      err => console.log(err)
    );
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
  Open(student: UserDetails) {
    let flag = false;
    if (student == null) {
      student = new UserDetails();
      flag = true;
    }
    const modalRef = this.modalService.open(StudentformComponent, {
      centered: true,
      backdrop: "static"
    });
    modalRef.componentInstance.student = student;
    modalRef.componentInstance.flagNewStudent = flag;
    modalRef.result.then(res => {
      this.loadStudentsData();
    });
    //this.modalService.open("Test Data");
  }
}
