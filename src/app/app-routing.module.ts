import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { Base64Component } from './tools/base64/base64.component'

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "base64", component: Base64Component },
  { path: "rawlist", component: Base64Component },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
