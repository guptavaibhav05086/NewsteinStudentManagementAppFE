import { Component, OnInit, Input } from "@angular/core";
import { FinancesDetails } from "src/app/Models/finances-details";
import { HttpServicesService } from "src/app/services/http-services.service";
import { UserDetails } from "src/app/Models/user-details";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-transactionform",
  templateUrl: "./transactionform.component.html",
  styleUrls: ["./transactionform.component.css"]
})
export class TransactionformComponent implements OnInit {
  @Input() transaction: FinancesDetails;
  model: FinancesDetails;
  @Input() students: UserDetails;
  @Input() isEdit: boolean;
  displayOthers: boolean = false;
  toggleCredit: boolean = true;
  savedToserver: boolean = false;
  types = {
    TranTypes: ["Credit", "Debit"],
    TranMode: ["Cash", "Bank Transfer"],
    PaidTo: ["Newstein", "Vaibhav", "Gaurav", "Anish", "Lavish"]
  };
  constructor(
    private service: HttpServicesService,
    public activeModal: NgbActiveModal
  ) {
    debugger;
  }

  ngOnInit() {
    debugger;
    console.log(this.transaction);
    console.log(this.students);

    this.model = JSON.parse(JSON.stringify(this.transaction));
    this.manageControls(this.model.TransactionType);
  }
  manageControls(value) {
    if (value == "Credit") {
      this.toggleCredit = true;
    } else {
      this.toggleCredit = false;
    }
  }
  updateTransaction() {
    debugger;
    if (this.isEdit) {
      this.service.updateTransactions(this.model).subscribe(
        res => {
          this.savedToserver = true;
          console.log(res);
        },
        err => {
          this.savedToserver = false;
          console.log(err);
        }
      );
    } else {
      this.service.createTransactions(this.model).subscribe(
        res => {
          this.savedToserver = true;
          console.log(res);
        },
        err => {
          this.savedToserver = false;
          console.log(err);
        }
      );
    }
  }
  closeModal() {
    if (this.savedToserver) this.activeModal.close(this.model);
    else this.activeModal.close();
  }
  checkSelected(value) {
    debugger;
    console.log(value);
    if (value == "0") {
      this.displayOthers = true;
    } else {
      this.displayOthers = false;
    }
  }
}
