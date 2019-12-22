import { Component, OnInit, Input } from '@angular/core';
import { BatchDetails } from 'src/app/Models/batch-details';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { HttpServicesService } from 'src/app/services/http-services.service';
import { ModuleDetails } from 'src/app/Models/module-details';
@Component({
  selector: 'app-batchform',
  templateUrl: './batchform.component.html',
  styleUrls: ['./batchform.component.css']
})
export class BatchformComponent implements OnInit {
  flagSuccess:boolean = false;
  flagError:boolean=false;
  moduleDetails:Array<ModuleDetails>;
  @Input() batch:BatchDetails;
  model:BatchDetails;
  constructor(public activeModal: NgbActiveModal, private service: HttpServicesService) { }

  ngOnInit() {
    this.model = JSON.parse(JSON.stringify(this.batch));
    this.moduleDetails = this.service.moduleDetails;
  }
  updateBatches(){
    this.service.setBatches(this.model).subscribe(
      res=>{
        console.log(res);
        this.activeModal.close(this.model)
      },
    err=>console.log(err));

  }

}
