import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/entities/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
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