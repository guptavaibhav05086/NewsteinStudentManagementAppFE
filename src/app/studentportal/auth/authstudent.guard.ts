import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate
} from "@angular/router";
import { UserService } from "../../services/user.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthstudentGuard implements CanActivate {
  constructor(private service: UserService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    debugger;
    let token = this.service.getUserToken();
    if (token.type == "Student") {
      return true;
    }
    //return true;
  }
}
