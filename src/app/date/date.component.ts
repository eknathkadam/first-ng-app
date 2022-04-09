import { Component, OnInit } from '@angular/core';
//import { setInterval } from 'timers';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage: string;

  constructor() {
    setInterval(()=>{
    let currentDate=new Date();
    let dateMessage: string;
    this.dateMessage=currentDate.toString() + ' ' + currentDate.toLocaleTimeString();
   },1000);
  }

  ngOnInit(): void {
  }
  addTwoNumbers(a: number, b: number){
    return(a+b);
  }
}
