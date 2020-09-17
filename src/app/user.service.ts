import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  firstName;
  lastName;
  phoneNumber;
  email;
  bio;
  img = '';

  constructor() { }

  getFirstName() {
    return this.firstName;
  }
  setFirstName(firstName: string) {
    this.firstName = firstName;
  }
  getLastName() {
    return this.lastName;
  }
  setLastName(lastName: string) {
    this.lastName = lastName;
  }
  getPhoneNumber(){
    return this.phoneNumber;
  }
  setPhoneNumber(phoneNumber){
    this.phoneNumber = phoneNumber;
  }
  getEmail(){
    return this.email;
  }
  setEmail(email){
    this.email = email;
  }
  getBio(){
    return this.bio;
  }
  setBio(bio){
    this.bio = bio;
  }
  getImg(){
    return this.img;
  }
  setImg(imgSrc){
    this.img = imgSrc;
  }
}


