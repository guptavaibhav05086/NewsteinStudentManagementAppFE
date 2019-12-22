import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { UserprofileComponent } from "./userprofile/userprofile.component";
import { StudenthomeComponent } from "./studenthome/studenthome.component";
import { StudentportalRoutingModule } from "./studentportal-routing.module";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { NgxLoadingModule } from "ngx-loading";
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserprofileComponent,
    StudenthomeComponent
  ],
  imports: [
    CommonModule,
    StudentportalRoutingModule,
    AccordionModule.forRoot(),
    NgxLoadingModule.forRoot({})
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class StudentportalModule {}
