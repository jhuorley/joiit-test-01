import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  public email:string;
  public password:string;
  constructor(
    private dataService:DataService,
    private modalService: NgbModal,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  async login(){
    let result = await this.dataService.people.login(this.email,this.password);
    if(result.state ==true){
      this.router.navigateByUrl('/main/profile/education')
    } else { alert(result.message); this.email=''; this.password=''}
  }

   validate(){
    let a:boolean = (this.email != undefined ? this.email.trim() != "" ? true : false :false) && (this.password ? this.password.trim() != '' ? true:false:false);
    return !a;
  }
}
