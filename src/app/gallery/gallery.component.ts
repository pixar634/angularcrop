import { Component, OnInit, Input, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @ViewChild('addFileTemplate', {static: false}) private addFileTemplate: TemplateRef<any>;
  public modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>, options: any = { class: 'modal-lg' }) {
    this.modalRef = this.modalService.show(template, options);
  }

  openAddModal(){
    this.openModal(this.addFileTemplate);

  }

}
