import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleEntity } from 'src/app/entities/people.entity';

@Component({
  selector: 'app-personal-contact-modal',
  templateUrl: './personal-contact-modal.component.html',
  styleUrls: ['./personal-contact-modal.component.scss']
})
export class PersonalContactModalComponent implements OnInit {
  public people:PeopleEntity = new PeopleEntity();
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  onNewClose(saved:boolean){
    if(saved){
        this.activeModal.close({saved:true,people:this.people})
         
    } else {
      this.activeModal.close({saved:false,people:null})
    }
  }

}
