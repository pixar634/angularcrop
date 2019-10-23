import {
  Component,
  OnInit,
  Input,
  ViewChild,
  TemplateRef,
  ElementRef
} from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { CommonService } from "../_services/common.service";
CommonService;
@Component({
  selector: "app-cropper",
  templateUrl: "./cropper.component.html",
  styleUrls: ["./cropper.component.css"]
})
export class CropperComponent implements OnInit {
  @ViewChild("imgViewTemplate", { static: false })
  private imgViewTemplate: TemplateRef<any>;

  public modalRef: BsModalRef;
  public attachURL: string = "../assets/img/2.jpg";

  constructor(
    private modalService: BsModalService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    // this.getImages();
  }

  openViewr() {
    this.openModal(this.imgViewTemplate);
  }

  openModal(template: TemplateRef<any>, options: any = { class: "modal-lg" }) {
    this.modalRef = this.modalService.show(template, options);
  }
}
