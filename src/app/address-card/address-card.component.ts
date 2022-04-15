import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {


@Input('user') user: User;

  constructor() { 
   
  }

  ngOnInit(): void {  }

}
