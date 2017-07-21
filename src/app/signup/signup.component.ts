import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { CloudService } from '../cloud.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [CloudService]
})
export class SignupComponent implements OnInit{
  public profilePic: string = '../../assets/profilePictureAdd.png';
  public model: any = {};

  constructor(private router: Router, private cloudService: CloudService, private localStorage: LocalStorageService) {
  }

  ngOnInit() {
  }

  submit() {
    this.localStorage.set("signupData", {
      user: this.model
    })
    this.router.navigate(['./genre']);
  }

  uploadFile(fileInput) {
    let file = fileInput.target.files[0];
    this.cloudService.uploadImage(file)
      .then(uploadedData => {
        this.profilePic = uploadedData.uploadedImageUrl;
        this.model.profilePic = this.profilePic
        console.log(uploadedData);
      })
  }
}