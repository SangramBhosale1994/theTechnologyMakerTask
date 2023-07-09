import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddItemsComponent } from './add-items/add-items.component';

const routes: Routes = [
  {path: "", component: DashboardComponent},
  {path: "addItem", component: AddItemsComponent},
  {path: "addItem/:id", component: AddItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
