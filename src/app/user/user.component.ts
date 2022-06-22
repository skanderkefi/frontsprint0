import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  login={"mailAddress":"","mdp":""}
  user:any
  isntconnected:boolean=false;


  constructor( public dataService:UserserviceService  ,
    public router : Router ,
    public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }



  loginF(){

    this.dataService.login(this.login)
    .then(res => {
      this.user=res;
      this.dataService.changeState(res);
      console.log("res",res);
      console.log("from ds",this.dataService.getState());
      this.router.navigate(['/home']);
     
  }) .catch((err)=>{
    this.router.navigate(['/']);
    this.isntconnected=true;
  })


}


}
