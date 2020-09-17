import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  bio;
  constructor(private userService: UserService) { }
  displayPlaceHolder(bio){
    return bio ? bio : 'Tell us a little about yourself';
  }
  getBio(){
    this.bio = this.userService.getBio();
  }
  setBio(bio){
    this.userService.setBio(bio);
  }
  ngOnInit() {
    this.getBio();
  }

}
