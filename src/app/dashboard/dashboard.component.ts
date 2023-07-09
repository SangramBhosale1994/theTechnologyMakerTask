import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products:any = []
  newProducts:any = []
  rating:any = []
  filteredResults: any;
  totalLength: any;
  page: number = 1;

  constructor(private api:ApiService, private router:Router){

  }

  ngOnInit(): void {
   this.api.getAllProducts().subscribe((res:any)=>{
    this.products = res
    this.newProducts = res
    this.totalLength = res.length
   })   
  }

  search(event:any){
    if (event) {
      const searchString = event.target.value.trim();
      this.filteredResults = this.newProducts.filter((product:any) => (
        (product.title.toLowerCase().indexOf(searchString.toLowerCase()) >= 0) ||
        (product.category.toLowerCase().indexOf(searchString.toLowerCase()) >= 0)  
      ));

      this.products = this.filteredResults;
    } else {
      this.products = this.newProducts; 
    }
  }

  addItem(){
    this.router.navigateByUrl("/addItem")
  }

  updateItem(data:any){
    let id = data
    this.router.navigateByUrl("/addItem/"+ id)
  }

  deleteItem(){
    confirm("Delete the Product ?")
  }

}
