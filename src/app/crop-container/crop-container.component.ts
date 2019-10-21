import { Component, OnInit, Input, ViewChild, TemplateRef,ElementRef } from '@angular/core';
import Cropper from "cropperjs";

@Component({
  selector: 'app-crop-container',
  templateUrl: './crop-container.component.html',
  styleUrls: ['./crop-container.component.css']
})
export class CropContainerComponent implements OnInit {
  @ViewChild('image', {static: false}) 
  private imageElement: ElementRef<any>;
  public attachURL: string = '../assets/img/2.png'
  private cropper:Cropper;
  public imageSource:string;
  public imageDestination: string;

  constructor() { 
    this.imageDestination="";
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.cropper= new Cropper(this.imageElement.nativeElement,{
      zoomable:false,
      scalable:false,
      aspectRatio: 1,
      crop : () =>{
        const canvas = this.cropper.getCroppedCanvas();
        this.imageDestination=canvas.toDataURL("image/png");
      }
    });
  }

}
