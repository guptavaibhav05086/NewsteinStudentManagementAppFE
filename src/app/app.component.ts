import { Component } from "@angular/core";
import { UserService } from "../app/services/user.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "newnewsteinstudentmanagementapp";
  toggleHeaders: boolean = true;
  classes: any = {
    "bg-img": true
  };
  constructor(private userService: UserService) {}
}
