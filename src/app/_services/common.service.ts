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
        .post<any>(`localhost/api/saveImage`, param )
  }

  saveUploadedImages(param){
    return this.http
        .post<any>(`localhost/api/uploadFile`, param )
  }

  getAllImages() {
    return this.http
      .get<any>(`localhost/api/getAllImages`);
  }
  
}
