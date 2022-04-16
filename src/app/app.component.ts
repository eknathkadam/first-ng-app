import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  userName: string;
  response: any;
constructor(private svc: TestService, private http: HttpClient){
  this.user = new User();
  this.user.userName="Eknath Kadam";
  this.user.organization="Alphonso Software";
  this.user.designation="Founder/CEO";
  this.user.address="444 alaska ave";
  this.user.phone=["3214569870","7412589630","9513574560"];
  
  this.svc.printToConsole("Got the service!");
} 
ngOnInit(){

  
}
searchUser(){
  this.http.get("https://api.github.com/users/"+this.userName)
  .subscribe((response)=>this.response=response);
  console.log(this.response);

}
}
