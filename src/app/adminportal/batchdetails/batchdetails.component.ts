import { Component, OnInit } from "@angular/core";
import { BatchDetails } from "../../Models/batch-details";
import { HttpServicesService } from "../../services/http-services.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BatchformComponent } from "../batchform/batchform.component";
@Component({
  selector: "app-batchdetails",
  templateUrl: "./batchdetails.component.html",
  styleUrls: ["./batchdetails.component.css"]
})
export class BatchdetailsComponent implements OnInit {
  batches: BatchDetails[];
  constructor(
    private service: HttpServicesService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    debugger;
    this.batches = this.service.batchDetails;
    this.collectionSize = this.batches.length;
  }
  page = 1;
  pageSize = 4;
  collectionSize: number;

  get batchesData(): BatchDetails[] {
    return this.batches
      .map((batch, i) => ({ id: i + 1, ...batch }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
  Open(batch: BatchDetails) {
    if (batch == null) {
      batch = new BatchDetails();
    }
    const modalRef = this.modalService.open(BatchformComponent, {
      centered: true
    });
    modalRef.componentInstance.batch = batch;
    modalRef.result.then(res => {
      debugger;
      var item = this.batches.find(function(item) {
        return item.BatchId == batch.BatchId;
      });
      if (item == null) {
        this.batches.push(res);
      } else {
        debugger;
        //item = res;
        var filterItem = this.batches.filter(
          item => item.BatchId != batch.BatchId
        );
        filterItem.push(res);
        this.batches = filterItem;
        //this.batchesData()

        //this.batchesData.push(res);
      }
    });
    //this.modalService.open("Test Data");
  }
}
