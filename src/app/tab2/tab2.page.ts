import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  firstName: string;
  lastName: string;

  constructor(private userService: UserService) {}

  displayPlaceHolder(name: string){
    return name ? name : 'Enter your name';
  }
  getFirstName(){
    this.firstName = this.userService.getFirstName();
  }
  getLastName(){
    this.lastName = this.userService.getLastName();
  }
  setName(firstName: string, lastName: string){
    this.userService.setFirstName(firstName);
    this.userService.setLastName(lastName);
  }
  ngOnInit(){
    this.getFirstName();
    this.getLastName();
  }
}
