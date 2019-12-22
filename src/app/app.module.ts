import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { StudentportalModule } from "../app/studentportal/studentportal.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { HomeComponent } from "./components/home/home.component";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { HeaderhomeComponent } from "./components/headerhome/headerhome.component";
// import { FooterhomeComponent } from "./components/footerhome/footerhome.component";
import { NgxLoadingModule } from "ngx-loading";
import { AdminportalModule } from "../app/adminportal/adminportal.module";
import { AdminService } from "../app/adminportal/service/admin.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    // HeaderhomeComponent
    // FooterhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentportalModule,
    AdminportalModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,

    FormsModule,
    AccordionModule.forRoot(),
    NgxLoadingModule.forRoot({})
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule {}
