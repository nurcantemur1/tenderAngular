import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { ProductComponent } from "../../product/product.component";
import { ProductAddComponent } from "../../product-add/product-add.component";
import { ProductAcceptComponent } from "../../product-accept/product-accept.component";
import { ProductDetailComponent } from "../../product-detail/product-detail.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "product-add", component: ProductAddComponent },
  { path: "product-accept", component: ProductAcceptComponent },
  { path: "product", component: ProductComponent },
  {path:"product-detail/:id",component:ProductDetailComponent},

];
