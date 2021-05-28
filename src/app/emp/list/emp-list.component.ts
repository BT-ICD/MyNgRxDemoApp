/**
 * Learning References:
 * Angular Component Communication - by Deborah Kurata
 * https://app.pluralsight.com/library/courses/angular-component-communication/table-of-contents
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EmpDataService } from 'src/app/Shared/Services/emp-data.service';
import { IEmp } from 'src/app/Shared/Types/emp-type';
import {    clearCurrentEmp, setCurrentEmp, EmpState, getCurrentEmp } from '../state/emp.reducer';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
empList:IEmp[];
selectedEmp:IEmp;
  constructor(private empDataService:EmpDataService, private store:Store<EmpState>, private router:Router ) {
    console.log('Emplist constructor');
   }

  ngOnInit(): void {
    console.log('Emplist Oninit' );
    this.empList= this.empDataService.getList();
    this.store.select(getCurrentEmp).subscribe((data)=>{
      this.selectedEmp = data;
    })
    
  }
  
  onRowSelect(data):void{
    this.selectedEmp = data.data;
    console.log(data.data);
    let empData1:IEmp = {id:data.data.id, name:data.data.name, designation:data.data.designation}; 
  
    //To disptch action
    this.store.dispatch(setCurrentEmp({empData:empData1}) );

  }
  onRowUnselect(data:IEmp):void{
    this.selectedEmp = null;
    this.store.dispatch(clearCurrentEmp());
  }
  edit():void{
    this.router.navigate(['empedit']);
  }

}
