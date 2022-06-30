import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-home-nav-bar',
  templateUrl: './home-nav-bar.component.html',
  styleUrls: ['./home-nav-bar.component.scss']
})
export class HomeNavBarComponent implements OnInit {

  constructor(
    private router:Router,
    private peopleService:PeopleService
  ) { }

  ngOnInit(): void {
  }
  async logout(){
    await this.peopleService.logout();
    
  }
}
