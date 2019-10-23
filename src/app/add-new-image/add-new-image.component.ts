import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../_services/common.service";

@Component({
  selector: "app-add-new-image",
  templateUrl: "./add-new-image.component.html",
  styleUrls: ["./add-new-image.component.css"]
})
export class AddNewImageComponent implements OnInit {
  uploadForm: FormGroup;
  selectedFiles: FileList;

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      label: [""]
    });
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log("FILE>>>>", this.selectedFiles);
  }

  get f() {
    return this.uploadForm.controls;
  }

  onSubmit() {
    let params = {
      image: this.selectedFiles,
      label: this.f.label.value
    };
    console.log("PARAMZZZZ", params);

    this.commonService.saveUploadedImages(params).subscribe(
      data => {
        if (data.success) {
          console.log("SUCCESS");
        }
      },
      error => {}
    );
  }
}
