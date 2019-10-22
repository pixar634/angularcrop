import { Component, AfterViewInit, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-new-image',
  templateUrl: './add-new-image.component.html',
  styleUrls: ['./add-new-image.component.css']
})
export class AddNewImageComponent implements OnInit {

  fileData: File = null;
  fileBase64: any = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  uploadForm: FormGroup;
  fileObject: any = {
    "filesID": 0,
    "attachmentType": 0,
    "attachedURL": "",
    "deleted": false
  }
  selectedFiles: FileList;
  uploadDone: any = false

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      label: [''] 
    });

  }
  selectFile(event) {
    this.selectedFiles = event.target.files;    
    console.log("FILE>>>>",this.selectedFiles); 
  }

  get f() { return this.uploadForm.controls; }

}
