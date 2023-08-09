import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Product } from "../models/entities/product";
import { ProductModel } from "../models/entities/productModel";
import { PhotoService } from "../services/photo.service";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-product-accept",
  templateUrl: "./product-accept.component.html",
  styleUrls: ["./product-accept.component.css"],
})
export class ProductAcceptComponent implements OnInit {
  products: Product[] = [];
  productmodel: ProductModel[] = [];
  dataLoaded = false;
  constructor(
    private productService: ProductService,
    private photoService: PhotoService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUnacceptProduct();
  } // ilk urunleri çekiyor

  getUnacceptProduct() {
    this.productService.getUnacceptProduct().subscribe((response) => {
      this.products = response.data;
      for(let i=0;i<this.products.length;i++){
        console.log(this.products[i].id);
        var model:ProductModel = {
        id : this.products[i].id,
        userId : this.products[i].userId,
        endprice : this.products[i].endprice,
        endtime : this.products[i].endtime,
        price : this.products[i].price,
        productName : this.products[i].productName,
        starttime : this.products[i].starttime,
        status : this.products[i].status,
        url : "https://res.cloudinary.com/tenderapp/image/upload/v1628888610/r0j8h0n0w04a063sesyq.png",
        };
        this.productmodel.push(model);
        this.dataLoaded = true;
        this.photoService.getPhoto(this.products[i].id).subscribe((response)=>{
          console.log(this.products[i].id +" - " + response.data.length );
         
          if(response!=null && response.data.length>0){
            this.productmodel.find(x=> x.id == this.products[i].id).url = response.data[0].url;
          }
         });
      }
    });
  }
  ischecked(id: number) {
    var product = this.products.find((p) => p.id == id);
    if (product) {
      product.status = !product.status;
    }
    console.log(product?.status);
  }
  kaydet() {
    for (var i = 0; i < this.products.length; i++) {
      this.productService
        .updateProduct(this.products[i])
        .subscribe((response) => {
          if (response.success) {
            if (i == this.products.length) {
              this.toastrService.success("Ürünler onaylandı");

              this.getUnacceptProduct();
              console.log(this.products[i]);
            }
          } else {
            this.toastrService.success("Güncellenemedi");
          }
        });
    }
  }
}
