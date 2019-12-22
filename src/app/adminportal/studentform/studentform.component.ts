import { Component, OnInit, Input } from "@angular/core";
import { UserDetails } from "../../Models/user-details";
import { HttpServicesService } from "../../services/http-services.service";
import { BatchDetails } from "src/app/Models/batch-details";
import { CourseDetails } from "src/app/Models/course-details";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-studentform",
  templateUrl: "./studentform.component.html",
  styleUrls: ["./studentform.component.css"]
})
export class StudentformComponent implements OnInit {
  constructor(
    private service: HttpServicesService,
    public activeModal: NgbActiveModal
  ) {}
  public batchDetails: Array<BatchDetails>;
  public courseDetails: Array<CourseDetails>;
  @Input() student: UserDetails;
  model: UserDetails;
  flagSuccess: boolean = false;
  flagError: boolean = false;
  @Input() flagNewStudent: boolean;
  ngOnInit() {
    debugger;
    this.batchDetails = this.service.batchDetails;
    this.courseDetails = this.service.courseDetails;
    this.model = JSON.parse(JSON.stringify(this.student));
    console.log(this.courseDetails);
    console.log(this.model);
  }
  status = ["Active", "Left", "Free Demo", "On Hold"];

  //model = new UserDetails();

  submitted = false;

  onSubmit() {
    if (!this.flagNewStudent) {
      console.log(this.model);

      this.service.setStudents(this.model).subscribe(
        res => {
          this.student = this.model;
          this.flagError = false;
          this.flagSuccess = true;
          this.updateStudent();
        },
        err => {
          this.flagError = true;
          this.flagSuccess = false;
          console.log(err);
        }
      );
    } else {
      this.model.ConfirmPassword = this.model.Password;
      this.model.Role = "Student";
      this.service.createStudents(this.model).subscribe(
        res => {
          this.student = this.model;
          this.flagError = false;
          this.flagSuccess = true;
          this.updateStudent();
        },
        err => {
          this.flagError = true;
          this.flagSuccess = false;
          console.log(err);
        }
      );
    }

    this.submitted = true;
  }
  onClose(){
    this.activeModal.close();
  }

  newHero() {
    this.model = new UserDetails();
  }
  updateStudent() {
    this.student.userName = this.model.userName;
    this.student.batchId = this.model.batchId;
    this.student.courseDetails = this.model.courseDetails;
    this.student.dateOfJoining = this.model.dateOfJoining;
    this.student.dateOfPayment = this.model.dateOfPayment;
    this.student.dueDate = this.model.dueDate;
    this.student.feesPaid = this.model.feesPaid;
  }
}
