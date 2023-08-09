import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { DataResponseModel } from '../models/dataResponseModel';
import { Product } from '../models/entities/product';
import { Statics } from './statics';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = Statics.ApiUrl + 'products';

  constructor(private httpClient: HttpClient) { }

  
  getProduct():Observable<ListResponseModel<Product>> {
    let newUrl = this.apiUrl + "/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newUrl);
  }
  getUnacceptProduct():Observable<ListResponseModel<Product>> {
    let newUrl = this.apiUrl + "/getallunaccept"
    return this.httpClient.get<ListResponseModel<Product>>(newUrl);
  }

  get(id:number):Observable<DataResponseModel<Product>> {
    let newUrl = this.apiUrl + "/getbyid?id=" + id;
    return this.httpClient.get<DataResponseModel<Product>>(newUrl);
    console.log(newUrl);
  }
  addProduct(product:Product){
    let newPath = this.apiUrl+'/add';
    //06.05.2021 16:00:00
    //2021-07-09T22:42
    //product.starttime = product.starttime.replace("T"," ").replace("");

    return this.httpClient.post<DataResponseModel<Product>>(newPath,product);
  }
  updateProduct(product:Product){
    let newPath = this.apiUrl+'/update';
    //console.log(product);
    return this.httpClient.post<DataResponseModel<Product>>(newPath,product);
  }

}
