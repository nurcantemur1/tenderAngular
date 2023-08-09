import { formatDate } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Photo } from "../models/entities/photo";
import { Product } from "../models/entities/product";
import { PhotoService } from "../services/photo.service";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"],
})
export class ProductAddComponent implements OnInit {
  productAddForm!: FormGroup;
  product : Product;
//  uploader:FileUploader;
  photos:Photo[]=[];
  selectedFile : File = null;
  image:any;
 // hasBaseDropZoneOver =false;
//  photoVisible=false;
 // files :any;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private productService: ProductService,
    private http: HttpClient,
  ) {}
  ngOnInit(): void {
    this.createProductAddForm();
   // this.initializeUploader();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      urunfiyat: ["", [Validators.required, Validators.min(0)]],
      starttime: ["", [Validators.required, Validators.minLength(2)]],
      endtime: ["", [Validators.required, Validators.minLength(2)]],
     // file: ["", [Validators.required]],
    });
  }

  onFileSelected(event){
  this.selectedFile=<File>event.target.files[0];
  }

selectfiles(e:any){
  if(e.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
      this.image = event.target.result;
    }
    
  }
}
  onUpload(){
    const filedata = new FormData;
    filedata.append('image',this.selectedFile,this.selectedFile.name);
    this.http.post('http://192.168.1.102:8084/api/photo/addphototo?productId='+this.product.id,filedata).subscribe(res=>{
      console.log(res);
    })
  }

  add() {
    this.product = {
      id: 0,
      userId: 27,
      productName: this.productAddForm.value["name"],
      price: this.productAddForm.value["urunfiyat"],
      starttime: this.convert(this.productAddForm.value["starttime"]),
      endprice: this.productAddForm.value["urunfiyat"],
      endtime: this.convert(this.productAddForm.value["endtime"]),
      status: false,
    };

    this.productService.addProduct(this.product).subscribe((response) => {
      if (response) {
        console.log(response);
        this.product = response.data;
        this.toastrService.success("Ürün eklendi", this.product.productName);
        this.onUpload();
   } else {
        this.toastrService.success("Eklenemedi");
      }
    });
  }

  convert(tarih: String) {
    const format = "dd.MM.yyyy HH:mm:ss";
    const locale = "en-US";
    return formatDate(tarih.toString(), format, locale);
  }

 
}
