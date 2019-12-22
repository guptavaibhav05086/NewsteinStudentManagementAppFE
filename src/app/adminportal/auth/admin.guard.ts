import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate
} from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class AdminGuard implements CanActivate {
  constructor(private service: UserService, private router: Router) {}
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
    if (token.type == "Admin") {
      return true;
    }
    this.router.navigate(["/dashboard"]);
    //return true;
  }
}
