import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  formdata:any
  id: any | null;
  constructor(private route:ActivatedRoute, private api:ApiService){}

  ngOnInit(): void {
      this.formdata = new FormGroup({
        id: new FormControl(""),
        title: new FormControl(""),
        price: new FormControl(""),
        description: new FormControl(""),
        category: new FormControl(""),
        image: new FormControl(""),
        rate: new FormControl(""),
        count: new FormControl("")
      })
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id != null) {      
      this.api.getAllProducts().subscribe((res:any)=>{
        for (let index = 0; index < res.length; index++) {
          const element = res[index];       
          if (this.id == element.id) {    
            this.formdata.patchValue({
              id: element.id,
              title: element.title,
              price: element.price,
              description: element.description,
              category: element.category,
              rate: element.rating.rate,
              count: element.rating.count
            })
          }
        }  
      })
    }    
  }

  submit(data:any){
    console.log(data);
    if (this.id) {
      confirm("Data will be updated")
    } else {
      confirm("Data will be saved")     
    }  
  }

  handleimage(event:any){

  }
}
