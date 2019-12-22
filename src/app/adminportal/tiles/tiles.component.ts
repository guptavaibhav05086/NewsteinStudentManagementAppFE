import { Component, OnInit } from "@angular/core";

import { HttpServicesService } from "src/app/services/http-services.service";

@Component({
  selector: "app-tiles",
  templateUrl: "./tiles.component.html",
  styleUrls: ["./tiles.component.css"]
})
export class TilesComponent implements OnInit {
  pageData: any;
  loading: boolean = false;
  constructor(private service: HttpServicesService) {}

  ngOnInit() {
    this.loading = true;
    this.loadDataFromServer();
  }
  loadDataFromServer() {
    this.service.getHomePageData().subscribe(
      res => {
        this.pageData = res;
        console.log(res);
        this.loading = false;
      },
      err => {
        this.loading = false;
      }
    );
  }
}
