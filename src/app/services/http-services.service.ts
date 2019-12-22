import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserDetails } from "../Models/user-details";
import { environment } from "src/environments/environment";
import { UserService } from "../services/user.service";
import { BatchDetails } from "../Models/batch-details";
import { CourseDetails } from "../Models/course-details";
import { map } from "rxjs/operators";
import { ModuleDetails } from "../Models/module-details";
import { FinancesDetails } from "../Models/finances-details";
@Injectable({
  providedIn: "root"
})
export class HttpServicesService {
  constructor(private _httpclient: HttpClient, private service: UserService) {}
  public batchDetails: Array<BatchDetails>;
  public courseDetails: Array<CourseDetails>;
  public moduleDetails: Array<ModuleDetails>;

  public getUserDetails(studentId: string): Observable<any> {
    /* return this._httpclient.get<UserDetails>(
      `${environment.baseUrl}${environment.userDetails}?studentId=${studentId}`,
      httpOptions
    ); */
    return this._httpclient.get<any>(
      `${environment.baseUrl}${environment.userDetails}?studentId=${studentId}`
    );
  }
  public getStudents() {
    debugger;
    return this._httpclient.get<Array<UserDetails>>(
      `${environment.baseUrl}${environment.studentDetails}`,
      <Object>this.getAuthHeader()
    );
    /* return this._httpclient.get<Array<UserDetails>>(
      `${environment.baseUrl}${environment.studentDetails}`,
      this.service.getAuthHeader()
    ); */
  }
  public setStudents(student: UserDetails) {
    debugger;
    return this._httpclient.post(
      `${environment.baseUrl}${environment.api_updateStudents}`,
      student,
      this.getAuthHeader()
    );
    /* return this._httpclient.get<Array<UserDetails>>(
      `${environment.baseUrl}${environment.studentDetails}`,
      this.service.getAuthHeader()
    ); */
  }
  public createStudents(student: UserDetails) {
    debugger;
    return this._httpclient.post(
      `${environment.baseUrl}${environment.api_createStudents}`,
      student,
      this.getAuthHeader()
    );
    /* return this._httpclient.get<Array<UserDetails>>(
      `${environment.baseUrl}${environment.studentDetails}`,
      this.service.getAuthHeader()
    ); */
  }
  public getMasterData() {
    debugger;
    return this._httpclient.get<Array<any>>(
      `${environment.baseUrl}${environment.api_MasterData}`,
      this.getAuthHeader()
    );
    /* return this._httpclient.get<Array<UserDetails>>(
      `${environment.baseUrl}${environment.studentDetails}`,
      this.service.getAuthHeader()
    ); */
  }
  public getHomePageData() {
    debugger;
    return this._httpclient.get<Array<any>>(
      `${environment.baseUrl}${environment.api_GetHomePageResponse}`,
      this.getAuthHeader()
    );
    /* return this._httpclient.get<Array<UserDetails>>(
      `${environment.baseUrl}${environment.studentDetails}`,
      this.service.getAuthHeader()
    ); */
  }

  public getTransactions() {
    debugger;
    return this._httpclient.get<Array<any>>(
      `${environment.baseUrl}${environment.api_Transactions}`,
      this.getAuthHeader()
    );
    /* return this._httpclient.get<Array<UserDetails>>(
      `${environment.baseUrl}${environment.studentDetails}`,
      this.service.getAuthHeader()
    ); */
  }
  public setBatches(batches: BatchDetails) {
    debugger;
    return this._httpclient.post(
      `${environment.baseUrl}${environment.api_CreateUpdateBatches}`,
      batches,
      this.getAuthHeader()
    );
    /* return this._httpclient.get<Array<UserDetails>>(
      `${environment.baseUrl}${environment.studentDetails}`,
      this.service.getAuthHeader()
    ); */
  }
  public createTransactions(transaction: FinancesDetails) {
    debugger;
    return this._httpclient.post(
      `${environment.baseUrl}${environment.api_CreateTransaction}`,
      transaction,
      this.getAuthHeader()
    );
    /* return this._httpclient.get<Array<UserDetails>>(
      `${environment.baseUrl}${environment.studentDetails}`,
      this.service.getAuthHeader()
    ); */
  }
  public updateTransactions(transaction: FinancesDetails) {
    debugger;
    return this._httpclient.post(
      `${environment.baseUrl}${environment.api_UpdateTransaction}`,
      transaction,
      this.getAuthHeader()
    );
    /* return this._httpclient.get<Array<UserDetails>>(
      `${environment.baseUrl}${environment.studentDetails}`,
      this.service.getAuthHeader()
    ); */
  }
  getAuthHeader(): any {
    // this.Token =  localStorage.getItem("token");

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("Token")
      })
    };
    return httpOptions;
  }
}
