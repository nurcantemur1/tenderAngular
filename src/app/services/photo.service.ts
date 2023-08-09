import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/entities/photo';
import { ListResponseModel } from '../models/listResponseModel';
import { Statics } from './statics';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  apiUrl = Statics.ApiUrl + 'photo';
  constructor(private httpClient: HttpClient) { 
   
  }
  getPhoto(id:number):Observable<ListResponseModel<Photo>> {
    let newUrl = this.apiUrl + "/getphoto?productId=" + id;
    return this.httpClient.get<ListResponseModel<Photo>>(newUrl);
  }
/*
  addPhoto(productId:number,filed:FormData){
    console.log(productId);
    console.log(filed);

    let newPath = this.apiUrl+"/addphotoadd"; //http://192.168.1.102:8084/api/photo/addphotoadd
   let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data' ,});
      
    let options = { headers: headers };
    let photo:PhotoModel
    photo = {
      file : filed,
      productId: productId
    }
    let photo:PhotoModel
    photo = {
      dateAdded :  new Date(),
      description: "aa",
      publicId : "jl",
      url:"hkj",
      file : filed,
      productId: productId
    }
    return this.httpClient.post<ArrayBuffer>(newPath,filed,options);
  }*/
}


