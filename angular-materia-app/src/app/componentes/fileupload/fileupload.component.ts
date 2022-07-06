import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUploadServiceService } from 'src/app/services/file-upload-service.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent  {

  file!: File;
  imageSrc!: string;

  shortLink: string = "";
  loading: boolean = false; // Flag variable

  // Inject service 
  constructor(private fileUploadService: FileUploadServiceService) { }

  ngOnInit(): void {
  }

  // On file Select
  onChange(event:any) {
      this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
      this.loading = !this.loading;
      console.log(this.file);
      this.fileUploadService.upload(this.file).subscribe(
          (event: any) => {
              if (typeof (event) === 'object') {

                  // Short link via api response
                  this.shortLink = event.link;
                  this.imageSrc = this.shortLink;
                  this.loading = false; // Flag variable 
              }
          }
      );
  }

 

}
