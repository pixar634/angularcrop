import {
  Component,
  OnInit,
  Input,
  ViewChild,
  TemplateRef,
  ElementRef
} from "@angular/core";
import Cropper from "cropperjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../_services/common.service";
import { ToastrService } from "ngx-toastr";

declare var $: any;
@Component({
  selector: "app-crop-container",
  templateUrl: "./crop-container.component.html",
  styleUrls: ["./crop-container.component.css"]
})
export class CropContainerComponent implements OnInit {
  @Input() image;
  @ViewChild("image", { static: false })
  private imageElement: ElementRef<any>;

  private cropper: Cropper;
  public imageSource: string;
  public imageDestination: string;
  public details: any;
  public xcoordinate: any;
  public ycoordinate: any;
  public width: any;
  public height: any;
  labelform: FormGroup;
  imagetag: any;
  attachURL: string = "../assets/img/2.jpg"; //hardcoded for now;change on completion of api

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private toastr: ToastrService
  ) {
    this.imageDestination = "";
  }

  ngOnInit() {
    this.labelform = this.formBuilder.group({
      label: [""]
    });
    //this.imagetag=`<img #image [src]="`+this.image+`"  (mouseup)="addLabel($event)"  crossorigin width="100%"/>`
    //console.log("passed value",this.image)
  }
  ngAfterViewInit() {
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: false,
      scalable: false,
      aspectRatio: NaN,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas();
        this.imageDestination = canvas.toDataURL("image/png");
        this.details = this.cropper.getData();
        this.xcoordinate = this.details.x;
        this.ycoordinate = this.details.y;
        this.width = this.details.width;
        this.height = this.details.height;
      }
    });
  }
  addLabel(e) {
    console.log("e");
  }

  onSubmit() {
    let param = this.labelform.value;
    param.image_name = this.imageDestination;
    param.xcoordinate = Math.round(this.xcoordinate);
    param.ycoordinate = Math.round(this.ycoordinate);
    param.width = Math.round(this.width);
    param.height = Math.round(this.height);
    this.commonService.saveCroppedImage(param).subscribe(
      data => {
        if (data.success) {
          this.toastr.success("Success!", "Image cropped Successfully");
        }
      },
      error => {
        this.toastr.error("Error!", "SOmething Went wrong!");
      }
    );
  }
}
