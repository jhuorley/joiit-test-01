import { Component, OnInit } from '@angular/core';
import { PeopleEntity } from 'src/app/entities/people.entity';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public tabIndex:number = 1;
  public people:PeopleEntity = new PeopleEntity();
  constructor() { }

  ngOnInit(): void {
  }

  setTabIndex(pos:number){
    this.tabIndex = pos;
  }
}
