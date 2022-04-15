import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
constructor(){
  this.user = new User();
  this.user.userName="Eknath Kadam";
  this.user.designation="Founder/CEO";
  this.user.address="444 alaska ave";
  this.user.phone=["3214569870","7412589630","9513574560"];
  
} 
}
