import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


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
