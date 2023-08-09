import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Photo } from '../models/entities/photo';
import { PhotoService } from '../services/photo.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  photos: Photo[]= [];
  product: any;
  updateForm!: FormGroup;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private photoService: PhotoService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.get(params['id']);
    });
    this.createProductUpdateForm();
  }
  createProductUpdateForm() {
    this.updateForm = this.formBuilder.group({
      name:["",[Validators.required, Validators.minLength(2)]],
      urunfiyat:["",[Validators.required,Validators.min(0)]],
      starttime:["",[Validators.required, Validators.minLength(2)]],
      endtime:["",[Validators.required, Validators.minLength(2)]],
      file:["",[]],
    });
  }
  get(id: number) {
    this.productService.get(id).subscribe((response) => {
      console.log(response.data.productName);
      this.product = response.data;
      this.product.starttime = this.convert2(this.product.starttime);
      this.product.endtime = this.convert2(this.product.endtime);
    });
  }
  kaydet(){
    var newproduct= {
      id: this.product.id,
      userId:27,
      productName: this.updateForm.value["name"],
      price: this.updateForm.value["urunfiyat"],
      starttime: this.convert(this.updateForm.value["starttime"]),
      endprice: this.updateForm.value["urunfiyat"],
      endtime: this.convert(this.updateForm.value["endtime"]),
      status:true,
    };
  
    this.productService.updateProduct(newproduct).subscribe(response=>{
      if(response.success){
        this.toastrService.success("Ürün güncellendi",newproduct.productName);
        this.router.navigate(["panel"]);
      }
    else{
      this.toastrService.success("Güncellenemedi");
    }
   });
  }

  convert(tarih:String){
    const format = 'dd.MM.yyyy HH:mm:ss';
    const locale = 'en-US';
    return formatDate(tarih.toString(), format, locale);
  }

  convert2(tarih:String){
    const format = 'yyyy-MM-ddTHH:mm';
    const locale = 'en-US';
    return formatDate(tarih.toString(), format, locale);
  }
  getphoto(id: number) {
    this.photoService.getPhoto(id).subscribe((response) => {
      console.log(response.data);
      this.photos = response.data;
    }); 
  }
}
