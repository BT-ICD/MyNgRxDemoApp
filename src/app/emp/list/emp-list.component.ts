/**
 * Learning References:
 * Angular Component Communication - by Deborah Kurata
 * https://app.pluralsight.com/library/courses/angular-component-communication/table-of-contents
 */
import { Statement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EmpDataService } from 'src/app/Shared/Services/emp-data.service';
import { IEmp } from 'src/app/Shared/Types/emp-type';
import {    clearCurrentEmp, setCurrentEmp, State } from '../state/emp.reducer';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
empList:IEmp[];
selectedEmp:IEmp;
  constructor(private empDataService:EmpDataService, private store:Store<State>, private router:Router ) {
    console.log('Emplist constructor');
   }

  ngOnInit(): void {
    console.log('Emplist Oninit' );
    // this.store.select('emps').subscribe((data):IEmpState=>{
    //   console.log( 'Data received using select method '+JSON.stringify(data));
    //   this.selectedEmp = data
    // })
    // this.store.select('emp').subscribe((data)=>{

    // })
    this.store.select('emps').subscribe((data)=>{
      console.log('initial selector ');
      this.selectedEmp = data
      console.log(data);
    })
    
    this.empList= this.empDataService.getList();
  }
  
  onRowSelect(data:IEmp):void{
    this.selectedEmp = data
    //To disptch action
    this.store.dispatch(setCurrentEmp({empData:this.selectedEmp}) );

  }
  onRowUnselect(data:IEmp):void{
    this.selectedEmp = null;
    this.store.dispatch(clearCurrentEmp());
  }
  edit():void{
    this.router.navigate(['empedit']);
  }

}
