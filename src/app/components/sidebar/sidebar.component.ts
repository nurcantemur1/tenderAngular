import { Component, OnInit } from "@angular/core";

export const ROUTES = [
  { path: "/dashboard", title: "Dashboard", icon: "design_app", class: "" },
  // { path: '/icons', title: 'Ürün Listesi',  icon:'education_atom', class: '' },
  {
    path: "/product",
    title: "Ürün Listesi",
    icon: "objects_spaceship",
    class: ""
  },

  {
    path: "/product-add",
    title: "Ürün Ekle",
    icon: "design_bullet-list-67",
    class: "",
  }, {
    path: "/product-accept",
    title: "Onay bekleyen ürünler",
    icon: "text_caps-small",
    class: "",
  },
 /* { path: "/maps", title: "Maps", icon: "location_map-big", class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "ui-1_bell-53",
    class: "",
  },
  {
    path: "/user-profile",
    title: "User Profile",
    icon: "users_single-02",
    class: "",
  },
 
   { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }*/
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
