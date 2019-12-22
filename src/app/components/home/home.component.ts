import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { TokenRequest } from "src/app/Models/token-request";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  model: TokenRequest;

  constructor(private service: UserService, private router: Router) {
    this.model = new TokenRequest();
  }

  ngOnInit() {}
  userLogin() {
    debugger;
    this.service.getToken(this.model).subscribe(
      res => {
        console.log(res);
        if (res.role) {
          this.service.setToken(res);
          let path = null;
          if (res.role == "Student") {
            path = "/studentprofile";
            this.router.navigate([path, res.userId]);
          } else if (res.role) {
            path = "/admin/dashboard";
            this.router.navigate([path]);
          }
        }
        // else if(res.role == "admin"){
        //   //this.service.setAdminToken(res.access_token);
        // }
      },
      err => {
        console.log(err);
      }
    );
  }
}
