import { Component, AfterViewChecked, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewChecked, OnInit{
  name;
  phone;
  email;
  bio;
  img;
  constructor(private userService: UserService, private photoService: PhotoService) {}
  getUserInfo(){
    if (this.userService.getFirstName() && this.userService.getLastName()){
      this.name = this.userService.getFirstName() + ' ' + this.userService.getLastName();
    }
    if (this.userService.getPhoneNumber()){
      this.phone = this.userService.getPhoneNumber();
    }
    if (this.userService.getEmail()){
      this.email = this.userService.getEmail();
    }
    if (this.userService.getBio()){
      this.bio = this.userService.getBio();
    }
    if (this.userService.getImg() === ''){
      this.img = '../assets/images/blank-profile-pic.png';
    }
  }
  ngAfterViewChecked(){
    this.getUserInfo();
  }
  async ngOnInit(){
    this.img = this.userService.getImg();
    await this.photoService.loadSaved();
  }
}
