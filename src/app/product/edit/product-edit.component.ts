import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
id:number;
productForm:FormGroup;
  constructor(private route:ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.id= +params.get('id');
      console.log(this.id);
    });
    this.initializeForm();
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

}
