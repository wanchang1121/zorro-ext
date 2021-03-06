import { filter } from 'rxjs/operators/filter';
// tslint:disable
import { Component } from '@angular/core';
import { HttpRequest, HttpClient, HttpResponse } from '@angular/common/http';
import { NzMessageService } from '../../../components/message/nz-message.service';
import { UploadFile } from '../../../components/upload/interface';

@Component({
  selector: 'yzt-demo-upload-manually',
  template: `
  <nz-upload
    [(nzFileList)]="fileList"
    [nzBeforeUpload]="beforeUpload">
    <button nz-button>
      <i class="anticon anticon-upload"></i><span>Select File</span>
    </button>
  </nz-upload>
  <button nz-button [nzType]="'primary'" [nzLoading]="uploading" (click)="handleUpload()" [disabled]="fileList.length == 0" style="margin-top: 16px">
    {{ uploading ? 'Uploading' : 'Start Upload' }}
  </button>
  `
})
export class YztDemoUploadManuallyComponent {
  uploading = false;
  fileList: UploadFile[] = [];

  constructor(private http: HttpClient, private msg: NzMessageService) {}

  beforeUpload = (file: UploadFile): boolean => {
    this.fileList.push(file);
    return false;
  }

  handleUpload() {
    const formData = new FormData();
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    this.uploading = true;
    // You can use any AJAX library you like
    const req = new HttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts/', formData, {
      // reportProgress: true
    });
    this.http.request(req).pipe(filter(e => e instanceof HttpResponse)).subscribe((event: any) => {
      this.uploading = false;
      this.msg.success('upload successfully.');
    }, (err) => {
      this.uploading = false;
      this.msg.error('upload failed.');
    });
  }
}
