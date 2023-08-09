import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes =[ {path:"login", component:LoginComponent},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,canActivate:[LoginGuard],
    children: [
        {path: '',component:AdminLayoutComponent}
   //  loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule),

  ]},
  {
    path: '**',
    redirectTo: 'dashboard',
    component:DashboardComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
