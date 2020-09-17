import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  phoneNumber;
  constructor(private userService: UserService) {}
  displayPlaceHolder(phoneNumber){
    return phoneNumber ? phoneNumber : 'XXX-XXX-XXXX';
  }
  getPhoneNumber(){
    this.phoneNumber = this.userService.getPhoneNumber();
  }
  setPhoneNumber(phoneNumber){
    this.userService.setPhoneNumber(phoneNumber);
  }
  ngOnInit(){
    this.getPhoneNumber();
  }

}
