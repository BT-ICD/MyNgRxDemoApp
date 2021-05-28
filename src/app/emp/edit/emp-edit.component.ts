import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IEmp } from 'src/app/Shared/Types/emp-type';
import { EmpState, getCurrentEmp } from '../state/emp.reducer';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']
})
export class EmpEditComponent implements OnInit {
  empForm:FormGroup;
  currentEmp:IEmp
  constructor(private fb:FormBuilder, private store:Store<EmpState>, private router:Router) {}

  ngOnInit(): void {
    
  
      this.initializeForm();
 
    this.store.select(getCurrentEmp).subscribe((data)=> 
        {
          this.currentEmp = data
          console.log(this.currentEmp);
          //Set Values to the Form Control
          if(this.currentEmp){
          this.empForm.setValue({
            id:this.currentEmp?.id,
            name:this.currentEmp?.name,
            designation:this.currentEmp?.designation
          });
        }
        }
    );
  }
  initializeForm():void{
    this.empForm = this.fb.group({
      id:['',Validators.required],
      name:['',Validators.required],
      designation:['',Validators.required]
    })
  }
  onSubmit():void{
    this.router.navigate(['/emp']);

  }
}
