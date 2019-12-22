import { Component, OnInit } from "@angular/core";
import { FinancesDetails } from "src/app/Models/finances-details";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TransactionformComponent } from "../transactionform/transactionform.component";
import { HttpServicesService } from "src/app/services/http-services.service";
import { UserDetails } from "src/app/Models/user-details";
@Component({
  selector: "app-finances",
  templateUrl: "./finances.component.html",
  styleUrls: ["./finances.component.css"]
})
export class FinancesComponent implements OnInit {
  transactionList: Array<FinancesDetails>;
  students: UserDetails;
  loading: boolean = false;
  page = 1;
  pageSize = 4;
  collectionSize: number;
  constructor(
    private modalService: NgbModal,
    private service: HttpServicesService
  ) {
    this.transactionList = new Array<FinancesDetails>();
  }

  ngOnInit() {
    this.getTransactions();
  }
  getTransactions() {
    this.loading = true;
    this.service.getTransactions().subscribe(
      res => {
        debugger;
        console.log(res);
        this.loading = false;
        this.transactionList = res["transactions"];

        this.students = res["students"];
      },
      err => {
        this.loading = false;
      }
    );
  }
  Open(transaction: FinancesDetails) {
    let flagEdit = true;
    if (transaction == null) {
      transaction = new FinancesDetails();
      flagEdit = false;
    }
    const modalRef = this.modalService.open(TransactionformComponent, {
      centered: true,
      backdrop: "static"
    });
    modalRef.componentInstance.transaction = transaction;
    modalRef.componentInstance.students = this.students;
    modalRef.componentInstance.isEdit = flagEdit;
    modalRef.result.then((res: FinancesDetails) => {
      debugger;
      this.getTransactions();
      /* if(res !=null){
        var item = this.transactionList.filter(
          item => item.TransactionId != res.TransactionId
        );
        this.transactionList = item;
        this.transactionList.push(res);
      } */

      console.log(res);
    });
  }

  get Transactions(): Array<FinancesDetails> {
    return this.transactionList
      .map((batch, i) => ({ id: i + 1, ...batch }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
}
