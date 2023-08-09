// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { FileUploader } from 'ng2-file-upload';
// import { Observable } from 'rxjs';
// import { Photo } from '../models/entities/photo';

// @Component({
//   selector: 'app-photo-add',
//   templateUrl: './photo-add.component.html',
//   styleUrls: ['./photo-add.component.css']
// })
// export class PhotoAddComponentimplements  implements OnInit {

//   uploadForm: FormGroup;

//   public uploader:FileUploader = new FileUploader({
//     isHTML5: true
//   });
//   title: string = 'Angular File Upload';
//   constructor(private fb: FormBuilder, private http: HttpClient ) { }

//   uploadSubmit(){
//         for (var i = 0; i < this.uploader.queue.length; i++) {
//           let fileItem = this.uploader.queue[i]._file;
//           if(fileItem.size > 10000000){
//             alert("Each File should be less than 10 MB of size.");
//             return;
//           }
//         }
//         for (var j = 0; j < this.uploader.queue.length; j++) {
//           let data = new FormData();
//           let fileItem = this.uploader.queue[j]._file;
//           console.log(fileItem.name);
//           data.append('file', fileItem);
//           data.append('fileSeq', 'seq'+j);
//           data.append( 'dataType', this.uploadForm.controls.type.value);
//           this.uploadFile(data).subscribe(data => alert(data.message));
//         }
//         this.uploader.clearQueue();
//   }

//   uploadFile(data: FormData): Observable<any> {
//     debugger
//     return this.http.post<any>('http://localhost:8080/upload', data);
//   }

//   ngOnInit() {
//     this.uploadForm = this.fb.group({
//       document: [null, null],
//       type:  [null, Validators.compose([Validators.required])]
//     });
//   }

// }



//  /* upload(){
//     this.uploader = new FileUploader({
//       url: "http://192.168.1.102:8084/api/photo/addphoto?productId="+this.productId,
//       disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
//       formatDataFunctionIsAsync: true,
//       formatDataFunction: async (item) => {
//         return new Promise( (resolve, reject) => {
//           resolve({
//             name: item._file.name,
//             length: item._file.size,
//             contentType: item._file.type,
//             date: new Date()
//           });
//         });
//       }
//     });
//   }*/