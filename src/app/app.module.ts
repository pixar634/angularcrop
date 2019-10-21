import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './gallery/gallery.component';
import { CropperComponent } from './cropper/cropper.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CropContainerComponent } from './crop-container/crop-container.component';




@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    CropperComponent,
    CropContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
