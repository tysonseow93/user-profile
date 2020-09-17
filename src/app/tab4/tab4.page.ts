import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  email;
  constructor(private userService: UserService) { }
  displayPlaceHolder(email){
    return email ? email : 'email@domain.com';
  }
  getEmail(){
    this.email = this.userService.getEmail();
  }
  setEmail(email){
    this.userService.setEmail(email);
  }
  ngOnInit(){
    this.getEmail();
  }
}
