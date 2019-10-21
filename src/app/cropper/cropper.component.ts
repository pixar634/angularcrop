import { Component, OnInit, Input, ViewChild, TemplateRef,ElementRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Cropper from "cropperjs";
@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.css']
})
export class CropperComponent implements OnInit {
  @ViewChild('imgViewTemplate', {static: false}) 
  private imgViewTemplate: TemplateRef<any>;

  @ViewChild('image', {static: false}) 
  private imageElement: ElementRef<any>;

  @Input() attachUrl
  
  public modalRef: BsModalRef
  public attachURL: string = '../assets/img/2.png'
  private cropper:Cropper;
  public imageSource:string;
  public imageDestination: string;

  constructor(
    private modalService: BsModalService,
  ) { 
    this.imageDestination="";
  }

  ngOnInit() {

  }

  openViewr(){
    this.openModal(this.imgViewTemplate);
  }

  openModal(template: TemplateRef<any>, options: any = { class: 'modal-lg' }) {
    this.modalRef = this.modalService.show(template, options);
  }

}
