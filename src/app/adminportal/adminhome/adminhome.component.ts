import { Component, OnInit } from "@angular/core";
import { HttpServicesService } from "../../services/http-services.service";
@Component({
  selector: "app-adminhome",
  templateUrl: "./adminhome.component.html",
  styleUrls: ["./adminhome.component.css"]
})
export class AdminhomeComponent implements OnInit {
  constructor(private service: HttpServicesService) {}

  ngOnInit() {
    this.service.getMasterData().subscribe(res => {
      debugger;   
      this.service.batchDetails = res["batchDetails"];
      this.service.courseDetails = res["courseDetails"];
      this.service.moduleDetails=res["moduleDetails"];
      this.service.batchDetails.map(item=>{
        var joining = new Date(item.BatchStartDate);
        item.BatchStartDate = new Date(joining.setDate(joining.getDate() + 1))
          .toISOString()
          .split("T")[0];

      });
    });
  }
}
