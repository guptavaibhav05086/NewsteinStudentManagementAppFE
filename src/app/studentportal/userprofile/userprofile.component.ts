import { Component, OnInit } from "@angular/core";
import { HttpServicesService } from "../../services/http-services.service";
import { UserDetails } from "src/app/Models/user-details";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { SessionDetails } from "src/app/Models/session-details";
@Component({
  selector: "app-userprofile",
  templateUrl: "./userprofile.component.html",
  styleUrls: ["./userprofile.component.css"]
})
export class UserprofileComponent implements OnInit {
  userDetails: UserDetails;
  loading:boolean = true;
  sessionDetails: Array<SessionDetails>;
  constructor(
    private _service: HttpServicesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userDetails = new UserDetails();
  }

  ngOnInit() {
    debugger;
    let id = this.route.snapshot.paramMap.get("id");

    this._service.getUserDetails(id).subscribe(
      res => {
        debugger;
        this.userDetails = res.userDetails;
        this.sessionDetails = new Array<SessionDetails>();
        res.sessionDetails.forEach(item => {
          let session = new SessionDetails();
          session.topics = item.sessionTopics.split(";");
          session.resources = item.sessionResources.split(";");
          session.sessionName = item.sessionName;
          this.sessionDetails.push(session);
          this.loading = false;
        });
        // this.sessionDetails.topics=this.sessionDetails.sessionTopics.split(";");
        // this.sessionDetails.resources = this.sessionDetails
        console.log(this.sessionDetails);
      },
      err => {
        debugger;
        console.log(err);
        this.loading = false;
      }
    );
  }
  items = ["Item 1", "Item 2", "Item 3"];

  addItem(): void {
    this.items.push(`Item ${this.items.length + 1}`);
  }
}
