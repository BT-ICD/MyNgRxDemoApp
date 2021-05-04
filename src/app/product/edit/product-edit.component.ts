import { Component, OnInit } from '@angular/core';
import {  FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from 'src/app/Shared/Services/product-data.service';
import { IProduct } from 'src/app/Shared/Types/product-type';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
id:number;
productForm:FormGroup;
  constructor(private route:ActivatedRoute, private fb:FormBuilder, private productDataService:ProductDataService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.route.paramMap.subscribe((params)=>{
      this.id= +params.get('id');
    });
    this.productDataService.selectedProductChanges$.subscribe((data)=>this.onSelectedProductChanged(data))
    
  }
  initializeForm():void{
    this.productForm = this.fb.group({
      id:[null,Validators.required],
      name:[null,Validators.required],
      rate:[null,Validators.required]
    })
  }
  submit():void{
    console.log(this.productForm.value);
  }
  get formControls(){
    return this.productForm.controls;
  }
  onSelectedProductChanged(data:IProduct):void{
    console.log('selected product changed');
    console.log(data);
    if(data){
      this.productForm.setValue({id:data.id, name:data.name, rate:data.rate});
      console.log('data available for edit');
    }
    else{
      this.productForm.reset();
      console.log('no data available for edit');
    }

  }

}
