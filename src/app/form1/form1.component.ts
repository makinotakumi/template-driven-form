import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component {
  employee= new Employee('', '', '');

  constructor() { }
 
  onSubmit() {
    console.log('Submitted:' + JSON.stringify(this.employee));
  }
  

}
