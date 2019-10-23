import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  saveCroppedImage(param){
    return this.http
        .post<any>(`http://localhost/Cropper-master/api/saveImage`, param )
  }

  saveUploadedImages(param){
    return this.http
        .post<any>(`http://localhost/Cropper-master/api/uploadFile`, param )
  }

  fetchImages() {
    return this.http
      .get<any>(`http://localhost/Cropper-master/api/getAllImages`);
  }
  
}
