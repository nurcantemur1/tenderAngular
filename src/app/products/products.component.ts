import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/entities/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  filterText = "";
  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
}