import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleEntity } from 'src/app/entities/people.entity';
import { DataService } from 'src/app/services/data.service';
import { PersonalContactModalComponent } from './personal-contact-modal/personal-contact-modal.component';

@Component({
  selector: 'app-user-personal-contact',
  templateUrl: './user-personal-contact.component.html',
  styleUrls: ['./user-personal-contact.component.scss']
})
export class UserPersonalContactComponent implements OnInit {

  public people:PeopleEntity = new PeopleEntity();
  constructor(    
    private dataService:DataService,
    private modalService: NgbModal
    ) { }
  ngOnInit(): void {
    this.dataService.people.getById(this.dataService.people.getToken()).then((p:PeopleEntity)=>{
      this.people = p ? p : new PeopleEntity();
    });
  }

  async shoeEdit(){
    const modal = this.modalService.open(PersonalContactModalComponent,{ size: 'lg',centered: true });
    modal.componentInstance.people = this.people;
    modal.componentInstance.is_edit = true;
    modal.result.then((r:any)=>{
      if(r.saved === true){
        this.dataService.people.save(this.people);
      }
    })
  }

}
