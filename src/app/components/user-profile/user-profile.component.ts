import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Users } from 'src/app/class/users';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
import {UsersService} from 'src/app/services/users.service'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public selectedFile:any;
  public event1:any;


  uploadUrl = "http://165.22.126.3:4100/api/v1/uploads/brand";

  imageUrl: any = 'data:image/png;base64,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';
  userDetails:Users = new Users();
  constructor(private cookie:CookieService, private httpClient:HttpClient, private toast: NgToastService) { }

  ngOnInit(): void {
    const cookieExists: boolean = this.cookie.check('clientDetails');
    if(cookieExists == true){
      this.userDetails =JSON.parse(this.cookie.get('clientDetails'));

    }

    }
    logout(){
      this.cookie.deleteAll();
      window.location.href= '';
  }
  onFileUpload(event:any){
    let name = event.target.files[0].name;
    let domain = "http://165.22.126.3:4100/media/profile Image/";
    let image_name = name;
    let image_url = domain.concat(image_name.toString());
    console.log(image_name);
    // console.log(event);

    this.selectedFile=<File>event.target.files[0];

    let reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event2) => {
      this.imageUrl=reader.result;

      this.saveProfileImage();
    }



  }
  saveProfileImage(){
    if (this.selectedFile == null) {
      alert('Missing image');
    }else{
       //  Uploading Image
       const fd = new FormData();
       fd.append('file', this.selectedFile, this.selectedFile.name);
       this.httpClient.post(`${this.uploadUrl}`, fd, { responseType: 'text' }).subscribe(res => {
console.log("Image saved");
         //
       },
         error => this.toast.error({ detail: "Error", summary: "Error uploading third image", duration: 3000 }));
     }
    }
  }


